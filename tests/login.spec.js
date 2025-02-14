import {test, expect, beforeEach} from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { Utils } from "../pages/utils";
import { AccountCreationPage } from "../pages/account-creation-page";
import { AccountPage } from "../pages/account-page";

let accountPage, accountCreationPage, loginPage, utils;

beforeEach(async ({ page }) => {
    accountPage = new AccountPage(page);
    accountCreationPage = new AccountCreationPage(page);
    loginPage = new LoginPage(page);
    utils = new Utils(page);

    await loginPage.navigateLoginPage();
  });

  test('Create an account', async ({ page }) => {
    const userData = await utils.generateRandomUserData();

    await loginPage.createAccountEmailField.fill(userData.email);
    
    await loginPage.createAccountButton.click();
    
    await accountCreationPage.firstNameField.fill(userData.firstName);
    
    await accountCreationPage.lastNameField.fill(userData.lastName);
    
    await accountCreationPage.passwdField.fill(userData.password);

    await accountCreationPage.registerButton.click();

    await expect(accountPage.successfulMessage).toBeVisible();
    
    await expect(accountPage.successfulMessage).toContainText('Your account has been created.');
  });

  test('Login error with invalid credentials', async ({ page }) => {
    await loginPage.signInEmailField.fill('invalid_email@test.com');
  
    await loginPage.signInPasswdField.fill('invalid_password');
  
    await loginPage.signInButton.click();
  
    await expect(loginPage.errorMessage).toBeVisible();
  
    await expect(loginPage.errorMessage).toContainText('Authentication failed.');
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
  
