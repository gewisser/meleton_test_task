//
Created by Roman on 27.05.2020.
_id.vue

<template lang="pug">
    div
        .card.horizontal
            .card-image
                img(:src="goodItem.img", width="300", height="300")
            .card-stacked
                .card-content
                    p {{ goodItem.name }}
                .card-action
                    a.btn.none-select.mr20(@click.stop="addToCart")
                        i.material-icons.right shopping_cart
                        | В покупки
                    h5.mr20(style="display: inline;") {{ formatCurrency(goodItem) }}
                    span.mr20 |
                    span Опубликован: ({{ unixTimeFormat(goodItem.timestamp) }})


</template>

<script>
    import cur from '@/plugins/mixins/cur.js';

    export default {
        name: 'goods',
        mixins: [cur],
        data() {
            return {
                goodItem: this.$store.getters.NewItem
            }
        },
        methods: {
            async addToCart(){
                await this.$store.dispatch('addToCart', this.$route.params.id);
            },
            unixTimeFormat(timestamp){
                return this.$unixTimeFormat(timestamp)
            }
        },
        async created(){
            this.goodItem = await this.$store.dispatch('get_good', this.$route.params.id);

            this.$store.commit('set_title', `AliExpress || ${this.goodItem.id}`);
        }
    }
</script>

<style>
</style>