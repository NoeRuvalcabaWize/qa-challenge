import { Page, Locator } from '@playwright/test';

class LoginPage {
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    readonly todayHeader: Locator;
    readonly emptyValue: string;
    readonly invalidPassword: string;
    readonly wrongPassword: string;
    readonly invalidEmailFormat: string;
    readonly invalidPasswordLength: string;

    constructor(page: Page) {
      this.emailInput = page.locator('input[type="email"]');
      this.passwordInput = page.locator('input[type="password"]');
      this.loginButton = page.locator('button[type="submit"]'); 
      this.todayHeader = page.locator('h1 >> text=Today');
      this.emptyValue = '';
      this.invalidPassword = 'Invalid!password17';
      this.wrongPassword = 'Wrong email or password';
      this.invalidEmailFormat = 'Please enter a valid email address';
      this.invalidPasswordLength = 'Passwords must be at least 8 characters long';

    }
  
    async login(email: string, password: string) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  
  export { LoginPage };