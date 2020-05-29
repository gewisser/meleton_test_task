//
Created by Roman on 28.05.2020.
cart.vue

<template lang="pug">
    div
        md-modal(v-model="editModal", caption="Редактирование товара", button-cancel="")
            md-input(v-model="editItem.name", name="Имя товара", placeholder="Блузка серая")
            a.btn.none-select(@click.stop="deleteRec")
                i.material-icons.right delete_forever
                | Удалить ({{ tryDel }})

        md-sortpanel(:by-date.sync="sortByDate", :by-price.sync="sortByPrice")

        md-cardlist.mt20(:items="items", :add-btn="false", @edit="onEditRec", @cardClick="onCardClick")

        .divider
        .row
            .col.s12.center-align
                md-pagination(v-model="page", :total="$store.getters.cart_page_total")

        a.btn-floating.btn-large.fixed-action-btn(@click="addNewGood")
            i.material-icons add
</template>

<script>
    export default {
        name: 'cart',
        data() {
            return {
                sortByDate: 'ASC',
                sortByPrice: 'ASC',

                tryDel: 5,
                editModal: false,
                editItem: this.$store.getters.NewItem,
                editIndex: undefined,
                items: [],
                page: 1,
            }
        },
        watch: {
            editIndex(){
                this.tryDel = 5;
            },
            page(){
                this.loadRec();
            },
            sortByDate(val){
                this.$store.commit('sort', {
                    array: this.$store.state.cart,
                    direction: val,
                    sort_param: 'timestamp'
                });
                this.loadRec();
            },
            sortByPrice(val) {
                this.$store.commit('sort', {
                    array: this.$store.state.cart,
                    direction: val,
                    sort_param: 'price'
                });

                this.loadRec();
            }
        },
        methods: {
            addNewGood(){
                this.$router.push({path: `/`});
            },
            async loadRec(){
                this.items = await this.$store.dispatch('getCartGoods', this.page);
            },
            onEditRec(item, index){
                this.editItem = item;
                this.editIndex = index;
                this.editModal = true;
            },
            deleteRec(){
                if (this.tryDel > 1)
                    this.tryDel--
                else {
                    this.tryDel = 5;
                    this.editModal = false;
                    this.$store.commit('deleteCartItem', this.editItem.id);
                    this.loadRec();
                }
            },
            async onCardClick(item, index){
                let index_g = await this.$store.dispatch('get_goodIndexById', item.id);
                this.$router.push({path: `/goods/${index_g}`});
            },
        },
        created(){
            this.loadRec();
        }
    }
</script>

<style>
</style>