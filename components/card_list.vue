//
Created by Roman on 27.05.2020.
card_list.vue

<template lang="pug">
    .card-list-grid
        .card.hoverable(v-for="(item, index) in items", :key="item.id", @click.stop="onCardClick(item, index)")
            .card-image
                img(:src="item.img", width="300", height="300")
                //span.card-title Card Title
                .halfway-fab
                    a.btn-floating.orange.darken-3.ml5(v-if="addBtn", @click.stop="onAddToCart(item, index)")
                        i.material-icons add_shopping_cart
                    a.btn-floating.red.ml5(@click.stop="onEdit(item, index)")
                        i.material-icons create
            .card-content
                p {{ item.name }}
            .card-action
                h5.m-0 {{ formatCurrency(item) }}


</template>

<script>
    import cur from '@/plugins/mixins/cur.js';

    export default {
        name: 'card_list',
        mixins: [cur],
        props: {
            cridList: { type: String, default: 's12 m4' },
            items: { type: Array, default: () => [] },
            addBtn: { type: Boolean, default: true },
        },
        methods: {
            onEdit(item, index){
                this.$emit('edit', item, index);
            },
            onAddToCart(item, index) {
                this.$emit('add', item, index);
            },
            onCardClick(item, index) {
                this.$emit('cardClick', item, index);
            }
        }
    }
</script>

<style scoped lang="sass">
    .halfway-fab
        position: absolute
        right: 24px
        bottom: -20px

    .card-list-grid
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: space-around
        .card
            width: 300px
            .card-content
                min-height: 125px
                border-top: 1px solid rgba(160, 160, 160, 0.2)
</style>