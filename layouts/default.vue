//
Created by Roman on 27.05.2020.
default.vue.vue

<template lang="pug">
    div
        .row.m-0
            .col.s6
                h3.mt10.pl10 {{ $store.getters.title }}
            .col.s6.right-align
                nuxt-link(to="/cart")
                    i.medium.material-icons.mt8 shopping_cart
                    span.new.badge.red(v-if="$store.getters.cart_count > 0", style="position: absolute; right: 10px; top: 12px; content") {{ $store.getters.cart_count }}

        .divider
        nuxt.container.mt12-5
</template>

<style lang="sass">

</style>
