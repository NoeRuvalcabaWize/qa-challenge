import { chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Establece directamente el token en localStorage
  await page.goto('https://app.todoist.com/');
  const token = process.env.TOKEN || '';

  await page.evaluate((token) => {
    localStorage.setItem('token', token); 
  }, token);

  // Guarda el estado de almacenamiento para reutilizarlo en las pruebas
  await context.storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;