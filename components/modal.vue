//
Created by Roman on 27.05.2020.
modal.vue

<template lang="pug">
    div
        .modal(v-if="value")
            .modal-content
                i.material-icons.small.close_icon.teal-text(v-if="!footer", @click.stop="close") close
                slot(name='header')
                    h5(v-if="caption") {{ caption }}
                div(:style="caption? 'margin-top: 22px': undefined")
                    slot
            .modal-footer(v-if="footer")
                slot(name='footer')
                    a.modal-action.btn-flat(v-if="buttonCancel === undefined || buttonCancel !== ''", @click.stop="close") Отмена
                    a.modal-action.btn-flat(@click="close") {{ buttonOk === undefined? 'OK': buttonOk }}
        .modal-overlay(v-if="value", style="z-index: 1002;display: block;opacity: 0.5;", @click.stop="onOverlayClick")
</template>

<script>
    export default {
        name: 'modal',
        props: {
            value: { type: Boolean, default: false },
            caption: { type: String, default: undefined },
            buttonCancel: { type: String, default: undefined },
            buttonOk: { type: String, default: undefined },
            footer: { type: Boolean, default: true },
            dismissible: { type: Boolean, default: true }
        },
        methods: {
            close() {
                this.$emit('input', false);
            },
            open() {
                this.$emit('input', true);
            },
            onOverlayClick(){
                if (!this.dismissible)
                    return;

                this.close();
            }
        }
    }
</script>

<style>
</style>