import { test, expect, beforeEach } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { Utils } from "../pages/utils";

let loginPage, utils;

beforeEach(async ({ page }) => {
  utils = new Utils(page);
  loginPage = new LoginPage(page, utils);
  await loginPage.navigateLoginPage();
  await loginPage.loginAsTesterUser();
});

test("Add item to cart", async ({ page }) => {
  await utils.searchProduct("Blouse");

  await utils.clickMoreButton();

  await utils.selectColor("White");

  await utils.addToCartButton.click();

  await expect(utils.productAddedMessage).toContainText(
    "Product successfully added to your shopping cart",
  );
});

test("Remove item to cart", async ({ page }) => {
  const cartQuantityLocator = page.locator(utils.cartQuantitySelector);
  const removeItemLocator = page.locator(utils.removeItemSelector);

  await utils.addItemToCart("Blouse", "White");

  await page.waitForSelector(utils.cartQuantitySelector);

  let quantityAfterAdd = await utils.getCartQuantity();

  await cartQuantityLocator.hover();

  await removeItemLocator.click();

  await page.waitForTimeout(5000);

  let finalQuantity = await utils.getCartQuantity();

  expect(parseInt(finalQuantity)).toBe(parseInt(quantityAfterAdd) - 1);
});
