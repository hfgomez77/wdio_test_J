module.exports = {
    waitElementForIsDisplayed: async function(element) {
        return await element.waitForDisplayed();
    }
}