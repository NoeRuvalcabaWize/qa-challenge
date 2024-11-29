import { test, expect } from '@playwright/test';
import { TaskPage } from '../pages/TaskPage';
import { LoginPage } from '../pages/LoginPage';
import { TaskDataProvider } from '../utils/dataProvider';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

test.describe('Add tasks', () => {
  let taskPage: TaskPage;
  let loginPage: LoginPage;
  let email: string;
  let password: string;
  let taskAmount: number;

  taskAmount = 10;

  const taskData = TaskDataProvider.generateTasks(taskAmount);

  test.beforeEach(async ({ page }) => {
    taskPage = new TaskPage(page);
    loginPage = new LoginPage(page);
    email = process.env.EMAIL || '';
    password = process.env.PASSWORD || '';
    await page.goto('/auth/login');
    await loginPage.login(email, password);
  });

  test(`Add "${taskAmount}" task`, async () => {
    const createdTaskNames = [];
    for (const { name, description } of taskData) {
      await taskPage.addTask(name, description);
      const taskExists = await taskPage.isTaskVisible(name);
      expect(taskExists).toBeTruthy();

      createdTaskNames.push(name);
    }
    for (const name of createdTaskNames) {
      await taskPage.deleteTask(name);
      const taskExistsAfterDelete = await taskPage.isTaskVisible(name);
      expect(taskExistsAfterDelete).toBeFalsy(); 
    }
  });
});
