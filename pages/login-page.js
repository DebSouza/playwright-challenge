import { Utils } from "./utils";
import { AccountCreationPage } from "./account-creation-page";

class LoginPage {
  constructor(page) {
    this.page = page;
    this.utils = new Utils(page);
    this.accountCreationPage = new AccountCreationPage(page);
    this.createAccountButton = page.locator("#SubmitCreate");
    this.createAccountEmailField = page.locator("#email_create");
    this.signInEmailField = page.locator("#email");
    this.signInPasswdField = page.locator("#passwd");
    this.signInButton = page.locator("#SubmitLogin");
    this.errorMessage = page.locator(".alert-danger li");
  }

  async navigateLoginPage() {
    await this.page.goto("/?controller=authentication&back=my-account");
  }

  async createAnAccount() {
    const userData = await this.utils.generateRandomUserData();

    await this.createAccountEmailField.fill(userData.email);
    await this.createAccountButton.click();

    await this.accountCreationPage.firstNameField.fill(userData.firstName);
    await this.accountCreationPage.lastNameField.fill(userData.lastName);
    await this.accountCreationPage.passwdField.fill(userData.password);

    await this.accountCreationPage.registerButton.click();

    return userData;
  }
}

module.exports = { LoginPage };
