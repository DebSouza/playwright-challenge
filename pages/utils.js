class Utils {
  constructor(page) {
    this.page = page;

    this.addToCartButton = page.locator("#add_to_cart");
    this.colorPicker = page.locator("#color_to_pick_list");
    this.listView = page.locator(".icon-th-large");
    this.moreButton = page.locator("div.product-container a.button");
    this.pageHeading = page.locator(".page-heading");
    this.productAddedMessage = page.locator(".layer_cart_product h2");
    this.productName = page.locator(".product-name");
    this.searchBar = page.locator(".search_query");
    this.searchButton = page.locator("[name=submit_search]");
    this.signOutButton = page.locator(".logout");
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

  async clickMoreButton() {
    await this.listView.click();
    await this.moreButton.click();
  }

  generateRandomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  }

  async generateRandomUserData() {
    const randomInfo = this.generateRandomString(8);
    const firstName = `User${randomInfo}`;
    const lastName = `Test${randomInfo}`;
    const email = `${lastName}-${firstName}@test.com`;
    const password = randomInfo;

    return {
      email,
      firstName,
      lastName,
      password,
    };
  }

  async searchProduct(productName) {
    await this.searchBar.click();
    await this.searchBar.fill(productName);
    await this.searchButton.click();
  }

  async selectColor(color) {
    const menuColor = this.colorPicker.locator(`[name="${color}"]`);
    await menuColor.click();
  }

  async signOut() {
    await this.signOutButton.click();
  }

  async testerUserData() {
    const email = "atproject@test.com";
    const password = "a1b2c3";
    const userFirstName = "AT";
    const userLastName = "Project";
    return {
      email,
      userFirstName,
      userLastName,
      password,
    };
  }
}

module.exports = { Utils };
