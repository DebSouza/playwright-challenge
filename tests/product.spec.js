import { test, expect, beforeEach } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { Utils } from "../pages/utils";
import {ProductPage} from "../pages/product-page";

let loginPage, utils, productPage;

beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    utils = new Utils(page);
    loginPage = new LoginPage(page, utils);

    await loginPage.navigateLoginPage();
    await loginPage.loginAsTesterUser();
    await utils.selectTopMenu("Women");
  });

  test("Order product list", async ({ page }) => {
    const defaultList = ['Faded Short Sleeve T-shirts', 'Blouse', 'Printed Dress', 'Printed Dress', 'Printed Summer Dress', 'Printed Summer Dress', 'Printed Chiffon Dress'];
    const lowestFirst = ['Printed Chiffon Dress', 'Faded Short Sleeve T-shirts', 'Printed Dress', 'Blouse', 'Printed Summer Dress', 'Printed Summer Dress', 'Printed Dress'];
    
    await utils.selectTopMenu("Women");
  
    const firstList = await productPage.checkProductList();
  
    expect(firstList).toEqual(defaultList);
  
    await productPage.sortDropdown.click();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
  
    const secondList = await productPage.checkProductList();
  
    expect(secondList).toEqual(lowestFirst);
  });
  
