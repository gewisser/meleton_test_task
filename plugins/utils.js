function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return '_'+s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function trimCurrency(val) {
    let result = val.replace(/\s/img, "");
    return result.replace(/,/img, ".");
}

function unixTimeFormat(timestamp) {
    if (timestamp === undefined)
        return '';

    if (typeof timestamp !== 'number') {
        timestamp = parseInt(timestamp)
    }

    let date = new Date(timestamp)
    return date.toLocaleDateString('ru-RU')+ ' '+ date.toLocaleTimeString('ru-RU')
}

export default ({ app }, inject) => {
    inject('guid', guid);
    inject('trimCurrency', trimCurrency)
    inject('unixTimeFormat', unixTimeFormat)
}