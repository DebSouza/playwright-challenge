import { test, expect, beforeEach } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { Utils } from "../pages/utils";
import { CartSummaryPage } from "../pages/cart-summary-page";
import { AddressPage } from "../pages/address-page";
import { ShippingPage } from "../pages/shipping-page";
import { PaymentPage } from "../pages/payment-page";
import { ProductPage } from "../pages/product-page";

let loginPage, utils, cartSummaryPage, addressPage, shippingPage, paymentPage, productPage;

beforeEach(async ({ page }) => {
  productPage = new ProductPage(page);
  paymentPage = new PaymentPage(page);
  shippingPage = new ShippingPage(page);
  addressPage = new AddressPage(page);
  cartSummaryPage = new CartSummaryPage(page);
  utils = new Utils(page);
  loginPage = new LoginPage(page, utils);
  await loginPage.navigateLoginPage();
  await loginPage.loginAsTesterUser();
});

test("Add item to cart", async ({ page }) => {
  await utils.searchProduct("Blouse");

  await productPage.clickMoreButton();

  await productPage.selectColor("White");

  await productPage.addToCartButton.click();

  await expect(productPage.productAddedMessage).toContainText(
    "Product successfully added to your shopping cart",
  );
});

test("Remove item to cart", async ({ page }) => {
  const cartQuantityLocator = page.locator(utils.cartQuantitySelector);
  const removeItemLocator = page.locator(utils.removeItemSelector);

  await productPage.addItemToCart("Blouse", "White");

  await page.waitForSelector(utils.cartQuantitySelector);

  let quantityAfterAdd = await utils.getCartQuantity();

  await cartQuantityLocator.hover();

  await removeItemLocator.click();

  await page.waitForTimeout(5000);

  let finalQuantity = await utils.getCartQuantity();

  expect(parseInt(finalQuantity)).toBe(parseInt(quantityAfterAdd) - 1);
});

test("Checkout", async ({ page }) => {
  await utils.searchProduct("Blouse");

  await productPage.clickMoreButton();

  await productPage.selectColor("White");

  await productPage.addToCartButton.click();

  await expect(productPage.productAddedMessage).toContainText(
    "Product successfully added to your shopping cart",
  );

  await productPage.proceedToCheckoutButton.click();

  await cartSummaryPage.proceedToCheckoutButton.click();

  await addressPage.proceedCheckoutButton.click();

  await shippingPage.agreeCheckbox.click();

  await shippingPage.proceedToCheckoutButton.click();

  await paymentPage.selectPaymentMethod("cheque");

  await paymentPage.confirmOrderButton.click();

  await expect(paymentPage.successMessage).toContainText(
    "Your order on My Shop is complete.",
  );
});