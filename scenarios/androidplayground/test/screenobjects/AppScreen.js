const Util = require('../helpers/Util.js');

class AppScreen {

    constructor(element) {
        Util.waitElementForIsDisplayed ($(element));
    }
}

module.exports = AppScreen;