class AccountPage {
  constructor(page) {
    this.page = page;
    this.successfulMessage = page.locator(".alert-success");
  }
}

module.exports = { AccountPage };
