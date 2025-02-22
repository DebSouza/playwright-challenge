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
        this.sortDropdown = page.locator("#selectProductSort");
    }

    async addItemToCart(productName, color) {
        await this.utils.searchProduct(productName);
        await this.clickMoreButton();
        await this.selectColor(color);
        await this.addToCartButton.click();
        await this.closeLayerCart.click()
      }
    
    async checkProductList(page) {
        const productList = [];
      
        for (let index = 1; index <= 7; index++) {
          const productSelector = `ul.product_list > li:nth-child(${index}) h5 a`;
          const element = await this.page.locator(productSelector);
          const text = await element.textContent();
          const productName = text.trim();
      
          productList.push(productName);
        }
      
        return productList;
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