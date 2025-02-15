class Utils {
  constructor(page) {
    this.page = page;
    this.cartQuantitySelector = ".shopping_cart .ajax_cart_quantity";
    this.pageHeading = page.locator(".page-heading");
    this.removeItemSelector = ".ajax_cart_block_remove_link";
    this.searchBar = page.locator(".search_query");
    this.searchButton = page.locator("[name=submit_search]");
    this.signOutButton = page.locator(".logout");
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

  async getCartQuantity() {
    const quantityText = await this.page
      .locator(this.cartQuantitySelector)
      .textContent();
    return quantityText.trim();
  }

  async searchProduct(productName) {
    await this.searchBar.click();
    await this.searchBar.fill(productName);
    await this.searchButton.click();
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
