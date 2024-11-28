import { test, expect } from '@playwright/test';
import { TaskPage } from '../pages/TaskPage';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file


test.describe('Add tasks', () => { 
    let taskPage: TaskPage;
    let loginPage: LoginPage;
    let taskName: string;
    let taskDescription: string;
    let email: string;
    let password: string;
    
    test.beforeEach(async ({ page }) => {
        taskPage = new TaskPage(page);
        loginPage = new LoginPage(page);
        taskName = 'Task name';
        taskDescription = 'Task description';
        email = process.env.EMAIL || '';
        password = process.env.PASSWORD || '';
        await page.goto('/auth/login');
        await loginPage.login(email, password);
    });

    test.afterEach(async ()=> {
        await taskPage.deleteTask();
    });
    
    test('Add task with name and description', async () => {
        await taskPage.addTask(taskName, taskDescription);
    });
    
    test('Add task with name only', async () => {
        await taskPage.addTask(taskName);
    });
});