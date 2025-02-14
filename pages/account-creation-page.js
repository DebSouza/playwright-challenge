class AccountCreationPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator('#customer_firstname');
        this.lastNameField = page.locator('#customer_lastname');
        this.passwdField = page.locator('#passwd');
        this.registerButton = page.locator('#submitAccount');
    }
}

module.exports = { AccountCreationPage };