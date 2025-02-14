class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInEmailField = page.locator('#email');
    this.signInPasswdField = page.locator('#passwd');
    this.signInButton = page.locator('#SubmitLogin');
    this.errorMessage = page.locator('.alert-danger li');
  }
  async navigateLoginPage() {
    await this.page.goto('/?controller=authentication&back=my-account');
  }
}

module.exports = { LoginPage };