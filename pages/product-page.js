import { Utils } from "./utils";
class ProductPage{
    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);
        this.addToCartButton = page.locator("#add_to_cart");
        this.colorPicker = page.locator("#color_to_pick_list");
        this.closeLayerCart = page.locator("[title='Close window']");
        this.listView = page.locator(".icon-th-large");
        this.moreButton = page.locator("div.product-container a.button");
        this.productAddedMessage = page.locator(".layer_cart_product h2");
        this.proceedToCheckoutButton = page.locator("[title='Proceed to checkout']");
    }

    async addItemToCart(productName, color) {
        await this.utils.searchProduct(productName);
        await this.clickMoreButton();
        await this.selectColor(color);
        await this.addToCartButton.click();
        await this.closeLayerCart.click()
      }
    
    async clickMoreButton() {
        await this.listView.click();
        await this.moreButton.click();
      }
    
      async selectColor(color) {
        const menuColor = this.colorPicker.locator(`[name="${color}"]`);
        await menuColor.click();
      }
    
}

module.exports = { ProductPage}