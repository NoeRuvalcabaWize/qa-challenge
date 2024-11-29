export class TaskDataProvider {
    static generateTasks(count: number): { name: string; description: string }[] {
        return Array.from({ length: count }, (_, i) => ({
            name: `Dynamic Task ${i}`,
            description: i % 2 === 0 ? `Description for task ${i + 1}` : '',
        }));
    }
}