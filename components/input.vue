//
Created by Roman on 27.05.2020.
input.vue

<template lang="pug">
    .input-field
        span.teal-text(v-if="name") {{ name }}:
        input.truncate(
            :id="GUIDID",
            :value="value",
            :type="type",
            :disabled="disabled",
            :readonly="readonly",
            :placeholder="placeholder",
            :autocomplete="autocomplete",
            @focus="onFocus",
            @blur="onBlur",
            @input="onInput",
            @change="onChange",
        )
</template>

<script>
    export default {
        name: 'input_',
        props: {
            value: {default: ''},
            name: {default: undefined},
            disabled: { type: Boolean, default: false },
            readonly: { type: Boolean, default: false },
            placeholder: { default: '' },
            autocomplete: { type: Boolean, default: false },
            type: { type: String, default: 'text' },
            lazy: { default: undefined }
        },
        computed: {
            c_lazy(){
                return this.lazy !== undefined && this.lazy === '';
            }
        },

        data() {
            return {
                focused: false,
                GUIDID: undefined
            }
        },
        methods: {
            onFocus() {
                this.focused = true;
                this.$emit('focus')
            },
            onBlur(){
                this.focused = false;
                this.$emit('blur')
            },
            onInput(val){
                if (this.c_lazy)
                    return;

                this.$emit('input', val.target.value);
            },
            onChange(val) {
                if (!this.c_lazy)
                    return;

                this.$emit('input', val.target.value);
            }
        },
        mounted(){
        },
        created(){
            this.GUIDID = this.$guid()
        }
    }
</script>

<style>
</style>