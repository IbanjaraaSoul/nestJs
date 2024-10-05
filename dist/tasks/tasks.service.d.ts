export declare class TasksService {
    getAllTasks(): Promise<any[]>;
    createTask(title: string, description: string): Promise<null>;
    updateTask(id: string, status: string): Promise<null>;
    deleteTask(id: string): Promise<null>;
}
