class PaymentPage {
    constructor(page) {
        this.page = page;
        this.chequeOption = page.locator(".cheque");
        this.bankwireOption = page.locator(".bankwire");
        this.confirmOrderButton = page.locator(".button-medium[type='submit']");
        this.successMessage = page.locator(".alert-success");
    }

    async selectPaymentMethod(paymentMethod){
        if (paymentMethod === "cheque") {
            await this.chequeOption.click();
          } else if (paymentMethod === "bankwire") {
            await this.bankwireOption.click();
          } else {
            throw new Error("Invalid payment method: " + paymentMethod);
          }
    }

}

module.exports = { PaymentPage }