//
Created by Roman on 28.05.2020.
sort_panel.vue

<template lang="pug">
    div
        a.btn.mr10(@click.stop="onSortByDate")
            i.material-icons.right {{ byDate === 'ASC'? 'arrow_downward': 'arrow_upward' }}
            | Сортировка по дате
        a.btn(@click.stop="onSortByPrice")
            i.material-icons.right {{ byPrice === 'ASC'? 'arrow_downward': 'arrow_upward' }}
            | Сортировка по цене
</template>

<script>
    export default {
        name: 'sort_panel',
        props: {
            byDate: { type: String, default: 'ASC' },
            byPrice: { type: String, default: 'ASC' },
        },
        data() {
            return {

            }
        },
        methods: {
            onSortByDate(){
                this.$emit('update:byDate', this.byDate === 'ASC'? 'DESC': 'ASC');
            },
            onSortByPrice(){
                this.$emit('update:byPrice', this.byPrice === 'ASC'? 'DESC': 'ASC');
            }
        }
    }
</script>

<style>
</style>