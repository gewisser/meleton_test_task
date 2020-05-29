function NewItem() {
    return {
        id: undefined,
        name: undefined,
        img: undefined,
        price: undefined,
        currency: 'rub',
        timestamp: undefined
    }
}

const countCartRec = 2; // Количество записей в списке покупок

export const state = () => ({
    goods: [],
    cart: [],
    title: '',
    sortStore: []
})

export const mutations = {
    set_goods (state, val) {
        state.goods = val;
    },
    set_title(state, val) {
        if (process.client) {
            document.title = `Meleton || ${val}`;
        }
        state.title = val;
    },
    delete_good(state, index){
        state.goods.splice(index, 1);
    },
    addToCart(state, index_good){
        state.cart.push(Object.assign({}, state.goods[index_good]));
    },
    deleteCartItem(state, id){
        for(let i = state.cart.length - 1; i >= 0; i--) {
            if (state.cart[i].id === id) {
                state.cart.splice(i, 1);
                return;
            }
        }
    },
    newGood(state, item) {
        state.goods.push(item);
    },

    sort(state, { array, direction, sort_param }) {
        // direction === ASC - если сортировка по возрастанию
        // direction === DESC - в случае сортировки по убыванию
        array.sort((a, b) => {
            if (direction === 'ASC') {
                return a[sort_param] - b[sort_param]
            } else {
                return b[sort_param] - a[sort_param]
            }
        })
    },
}

export const getters = {
    title: state => state.title,
    NewItem: () => NewItem(),
    cart_count: state => state.cart.length,
    cart_page_total: state => {
        let total = state.cart.length / countCartRec >> 0; // деление без остатка
        let outflow = state.cart.length % countCartRec; // Остаток от деления
        if (outflow > 0)
            total++;
        return total;
    }
}

export const actions = {
    async get_goods ({ commit, state }) {
        if (state.goods.length > 0)
            return state.goods;

        const { data } = await this.$axios.get('/goods.json');
        commit('set_goods', data);
        return data;
    },
    newGood({ state, commit }){
        let item = NewItem();
        item.id = state.goods.length + 1;
        item.timestamp = new Date().getTime();

        commit('newGood', item);

        return { item, index: state.goods.length - 1 };
    },
    async get_good({dispatch}, index){
        let goods = await dispatch('get_goods');

        return goods[index];
    },
    addToCart({ commit }, index_good){
        commit('addToCart', index_good)
    },
    getCartGoods({ state }, page) {
        let offset = ((page - 1) * countCartRec);
        let rec = [];

        for (let i = offset; i < state.cart.length && (i < offset+countCartRec); i++)
            rec.push(state.cart[i])

        return rec;
    },
    get_goodIndexById({ state }, id){
        return state.goods.findIndex(good => good.id === id);
    }
}

export const strict = false