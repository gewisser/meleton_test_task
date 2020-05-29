export default {
    methods: {
        formatCurrency(item){
            if (!process.client)
                return;

            if (item.price === undefined || item.price === '')
                return '';

            if (typeof item.price !== 'number') {
                item.price = parseFloat(this.$trimCurrency(item.price))
            }

            return item.price.localeCurrencyFormat(item.currency);
        },
    },
};