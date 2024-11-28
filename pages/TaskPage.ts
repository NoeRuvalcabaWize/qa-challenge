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

    constructor(page: Page) {
        this.taskBtn = page.locator('button.plus_add_button');
        this.taskName = page.locator('p[data-placeholder="Task name"]');
        this.taskDescription =  page.locator('p[data-placeholder="Description"]');
        this.addTaskBtn = page.getByTestId('task-editor-submit-button');
        this.taskList = page.locator('div.task_content');
        this.taskDescriptionField = page.locator('div.task_description');
        this.moreButton = page.getByTestId('button-container').getByLabel('More actions');
        this.deleteTaskButton = page.getByText('Delete').first();
        this.deleteConfirmation = page.locator('//span[text()="Delete"]');
    }

    async addTask(name: string, description?: string) {
        await this.taskBtn.click();
        await this.taskName.fill(name);
        if (description) {
            await this.taskDescription.fill(description);
        }
        await this.addTaskBtn.click();
        await expect(this.taskList).toContainText(name);
        if (description) {
            await expect(this.taskDescriptionField).toContainText(description);
        }
    }

    async deleteTask(name?: string) {
        await this.taskList.click();
        await this.moreButton.click();
        await this.deleteTaskButton.click();
        await this.deleteConfirmation.click();
    }
}
export { TaskPage };