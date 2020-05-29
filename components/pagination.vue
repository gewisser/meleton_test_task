//
Created by Roman on 27.05.2020.
pagination.vue

<template lang="pug">
    ul.pagination.none-select
        li(:class="{disabled: value <= 1}", @click="onUpdChevron(true)")
            a
                i.material-icons chevron_left
        template(v-for="item in total")
            li(:class="{active: item === value}", @click="onUpdValue(item)")
                a {{ item }}
        li(:class="{disabled: value >= total}", @click="onUpdChevron(false)")
            a
                i.material-icons chevron_right
</template>

<script>
    export default {
        name: 'pagination',
        props: {
            value: { type: Number, default: 1 },
            total: { type: Number, default: 1 }
        },
        data() {
            return {

            }
        },
        methods: {
            onUpdValue(item) {
                this.$emit('input', item);
            },
            onUpdChevron(isLift){
                let new_val = this.value;

                if (isLift && this.value > 1)
                    new_val--;
                else if (!isLift && this.value < this.total)
                    new_val++;
                else return;

                this.onUpdValue(new_val);
            }
        }
    }
</script>

<style scoped lang="sass">
    .pagination
        li
            cursor: pointer
</style>