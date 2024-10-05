"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const supabase_client_1 = require("../supabase-client");
let TasksService = class TasksService {
    async getAllTasks() {
        const { data, error } = await supabase_client_1.supabase.from('tasks').select('*');
        if (error)
            throw new Error(error.message);
        return data;
    }
    async createTask(title, description) {
        const { data, error } = await supabase_client_1.supabase.from('tasks').insert([{ title, description }]);
        if (error)
            throw new Error(error.message);
        return data;
    }
    async updateTask(id, status) {
        const { data, error } = await supabase_client_1.supabase.from('tasks').update({ status }).eq('id', id);
        if (error)
            throw new Error(error.message);
        return data;
    }
    async deleteTask(id) {
        const { data, error } = await supabase_client_1.supabase.from('tasks').delete().eq('id', id);
        if (error)
            throw new Error(error.message);
        return data;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map