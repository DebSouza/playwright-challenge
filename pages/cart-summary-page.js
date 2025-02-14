class CartSummaryPage {
    constructor(page){
        this.page = page;
        this.proceedToCheckoutButton = page.locator("p [title='Proceed to checkout']");
    }
}

module.exports = { CartSummaryPage }