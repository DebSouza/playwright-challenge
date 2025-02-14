import {test, expect, beforeEach} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

let loginPage;

beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateLoginPage();
  });

  test('Login error without email', async ({ page }) => {
    await loginPage.signInButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('An email address required.');
  });
  
  test('Login error without password', async ({ page }) => {
    await loginPage.signInEmailField.fill('invalid_email@test.com');
    await loginPage.signInButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Password is required.');
  });
  
  test('Login error with invalid credentials', async ({ page }) => {
    await loginPage.signInEmailField.fill('invalid_email@test.com');
    await loginPage.signInPasswdField.fill('invalid_password');
    await loginPage.signInButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Authentication failed.');
  });