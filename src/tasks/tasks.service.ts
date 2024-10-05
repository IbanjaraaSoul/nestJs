import { Injectable } from '@nestjs/common'
import { supabase } from '../supabase-client'

@Injectable()
export class TasksService {
  async getAllTasks() {
    const { data, error } = await supabase.from('tasks').select('*')
    if (error) throw new Error(error.message)
    return data
  }

  async createTask(title: string, description: string) {
    const { data, error } = await supabase.from('tasks').insert([{ title, description }])
    if (error) throw new Error(error.message)
    return data
  }

  async updateTask(id: string, status: string) {
    const { data, error } = await supabase.from('tasks').update({ status }).eq('id', id)
    if (error) throw new Error(error.message)
    return data
  }

  async deleteTask(id: string) {
    const { data, error } = await supabase.from('tasks').delete().eq('id', id)
    if (error) throw new Error(error.message)
    return data
  }
}
