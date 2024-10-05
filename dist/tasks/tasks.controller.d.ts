import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Promise<any[]>;
    createTask(title: string, description: string): Promise<null>;
    updateTask(id: string, status: string): Promise<null>;
    deleteTask(id: string): Promise<null>;
}
