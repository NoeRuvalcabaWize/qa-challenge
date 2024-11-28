import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

test.describe('Login', () => {
  let loginPage: LoginPage;
  let email: string;
  let password: string;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    email = process.env.EMAIL || '';
    password = process.env.PASSWORD || '';
    await page.goto('/auth/login');
  });

  test('Successful login', async () => {
    await loginPage.login(email, password);
    await expect(loginPage.todayHeader).toBeVisible();
  });

  test('Unsuccessful login with invalid password', async ({ page }) => {
    const invalidPassword = loginPage.invalidPassword;
    const wrongPassword = loginPage.wrongPassword;
    await loginPage.login(email, invalidPassword);
    await expect(page.getByText(wrongPassword)).toBeVisible();
  });

  test('Unsuccessful login with invalid email format', async ({ page }) => {
    const empty = loginPage.emptyValue;
    const badEmail = loginPage.invalidEmailFormat;
    await loginPage.login(empty, password);
    await expect(page.getByText(badEmail)).toBeVisible();
  });

  test('Unsuccessful login with invalid password lenght', async ({ page }) => {
    await loginPage.login(email,loginPage.emptyValue );
    await expect(page.getByText(loginPage.invalidPasswordLength)).toBeVisible();
  });
});