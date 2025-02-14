class ShippingPage {
    constructor(page) {
        this.page = page;
        this.agreeCheckbox = page.locator("[type='checkbox']");
        this.proceedToCheckoutButton = page.locator("[name=processCarrier]");
    }
}

module.exports = { ShippingPage }