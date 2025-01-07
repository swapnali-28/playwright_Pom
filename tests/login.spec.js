import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';

test('test', async ({ page }) => {

    const login = new LoginPage(page)
    await login.goToLoginPage()
    await login.login('tomsmith','SuperSecretPassword')
//   await page.goto('https://the-internet.herokuapp.com/login');
//   await page.getByLabel('Username').click();
//   await page.getByLabel('Username').fill('tomsmith');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('SuperSecretPassword!');
//   await page.getByRole('button', { name: ' Login' }).click();
});