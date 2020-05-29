import Vue from 'vue';
import pagination from "~/components/pagination.vue";
import cardlist from "~/components/card_list.vue";
import modal from "~/components/modal.vue";
import input from "~/components/input.vue";
import sort_panel from "~/components/sort_panel.vue";

Vue.component(
    'md-pagination',
    pagination
);

Vue.component(
    'md-cardlist',
    cardlist
);

Vue.component(
    'md-modal',
    modal
);

Vue.component(
    'md-input',
    input
);

Vue.component(
    'md-sortpanel',
    sort_panel
);