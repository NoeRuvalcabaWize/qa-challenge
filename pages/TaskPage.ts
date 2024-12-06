import { Page, Locator, expect } from '@playwright/test';

class TaskPage {
    private taskBtn: Locator;
    private taskName: Locator;
    private taskDescription: Locator;
    private addTaskBtn: Locator;
    private taskList: Locator;
    private taskDescriptionField: Locator;
    private moreButton: Locator;
    private deleteTaskButton: Locator;
    private deleteConfirmation: Locator;
    private taskDescriptionform: Locator;
    private firstAttempt: boolean;

    constructor(page: Page) {
        this.taskBtn = page.locator('button.plus_add_button');
        this.taskName = page.locator('div[aria-label="Task name"]');
        this.taskDescription =  page.locator('p[data-placeholder="Description"]');
        this.addTaskBtn = page.getByTestId('task-editor-submit-button');
        this.taskList = page.locator('div.task_content');
        this.taskDescriptionField = page.locator('div.task_description');
        this.moreButton = page.getByTestId('button-container').getByLabel('More actions');
        this.deleteTaskButton = page.getByText('Delete').first();
        this.deleteConfirmation = page.locator('//span[text()="Delete"]');
        this.taskDescriptionform = page.locator('p[data-placeholder="Description"]');
        this.firstAttempt = true;
    }

    async addTask(name: string, description?: string) {
        if (this.firstAttempt) {
            await this.taskBtn.click({ delay: 500 });
            await this.taskName.fill(name);
            if (description) {
                await this.taskDescription.fill(description);
            }
            await this.addTaskBtn.click();
        } else {
            await this.addTaskForm(name, description);
        }
        this.firstAttempt = false;
    }

    async addTaskForm(name: string, description?: string) {
        await this.taskName.fill(name);
        if (description) {
            await this.taskDescriptionform.fill(description);
        }
        await this.addTaskBtn.click();
    }

    async deleteTask(name: string) {
        await this.taskList.getByText(name).click({ delay: 500 });
        await this.moreButton.click();
        await this.deleteTaskButton.click();
        await this.deleteConfirmation.click();
    }

    async isTaskVisible(name: string) {
        const task = this.taskList.getByText(name);
        return await task.isVisible();
    }
}
export { TaskPage };