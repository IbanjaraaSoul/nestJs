import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common'
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks() {
    return this.tasksService.getAllTasks()
  }

  @Post()
  async createTask(@Body('title') title: string, @Body('description') description: string) {
    return this.tasksService.createTask(title, description)
  }

  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body('status') status: string) {
    return this.tasksService.updateTask(id, status)
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id)
  }
}
