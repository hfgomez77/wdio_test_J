module.exports = {
    waitForIsShown: async function(element) {
        return await element.waitForDisplayed();
    }
}