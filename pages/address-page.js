class AddressPage {
    constructor(page){
        this.page = page;
        this.proceedCheckoutButton = page.locator("[name=processAddress]");
    }
}

module.exports = {AddressPage};