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

  await utils.addItemToCart();

  await expect(utils.productAddedMessage).toContainText(
    "Product successfully added to your shopping cart",
  );
});
