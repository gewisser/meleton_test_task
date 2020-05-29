Number.prototype.localeCurrencyFormat = function(){
    let locale = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
    return this.toLocaleString(locale, { style: 'currency', currency: arguments[0]});
};