//
Created by Roman on 26.05.2020.
index.vue

<template lang="pug">
    div
        md-modal(v-model="editModal", caption="Редактирование товара", button-cancel="")
            md-input(v-model="editItem.id", name="ID", placeholder="1,2,3,4...")
            md-input(v-model="editItem.name", name="Имя товара", placeholder="Блузка серая")
            md-input(v-model="editItem.img", name="Ссылка на изображение", placeholder="https://")
            md-input(v-model="editItem.price", lazy, name="Цена", placeholder="0.00")
            md-input(v-model="editItem.currency", lazy, name="Валюта", placeholder="rub")
            a.btn.none-select(@click.stop="deleteGood")
                i.material-icons.right delete_forever
                | Удалить ({{ tryDel }})

        md-sortpanel(:by-date.sync="sortByDate", :by-price.sync="sortByPrice")

        md-cardlist.mt20(:items="$store.state.goods", @edit="onEditGoods", @add="onAddToCart", @cardClick="onCardClick")

        .divider
        .row
            .col.s12.center-align
                md-pagination(v-model="page", :total="totalPage")

        a.btn-floating.btn-large.fixed-action-btn(@click="addNewGood")
            i.material-icons add

</template>

<script>
    function NewItem() {
        return {
            id: undefined,
            name: undefined,
            img: undefined,
            price: undefined,
            currency: undefined
        }
    }

    export default {
        name: 'index',
        data() {
            return {
                sortByDate: 'ASC',
                sortByPrice: 'ASC',

                tryDel: 5,
                editModal: false,
                page: 1,
                totalPage: 1,
                editIndex: undefined,
                editItem: this.$store.getters.NewItem
            }
        },
        async fetch ({ store, params }) {
            await store.dispatch('get_goods');
        },
        watch: {
            editIndex(){
                this.tryDel = 5;
            },
            sortByDate(val){
                this.$store.commit('sort', {
                    array: this.$store.state.goods,
                    direction: val,
                    sort_param: 'timestamp'
                });
            },
            sortByPrice(val) {
                this.$store.commit('sort', {
                    array: this.$store.state.goods,
                    direction: val,
                    sort_param: 'price'
                });
            }
        },

        methods: {
            onEditGoods(item, index){
                this.editItem = item;
                this.editIndex = index;
                this.editModal = true;
            },
            async addNewGood(){
                let newItem = await this.$store.dispatch('newGood');
                this.editIndex = newItem.index;
                this.editItem = newItem.item;
                this.editModal = true;
            },
            deleteGood(){
                if (this.tryDel > 1)
                    this.tryDel--
                else {
                    this.tryDel = 5;
                    this.editModal = false;
                    this.$store.commit('delete_good', this.editIndex);
                }
            },
            onCardClick(item, index){
                this.$router.push({path: `/goods/${index}`});
            },
            async onAddToCart(item, index) {
                await this.$store.dispatch('addToCart', index);
            }
        },

        created(){
            this.$store.commit('set_title', 'AliExpress');
        }
    }
</script>

<style lang="sass">

</style>