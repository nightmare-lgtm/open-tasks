import type { createTaskDTO, task } from "~/types/tasks"

export default class postService  {
    
    //по умолчанию у запросов тип запроса гет
    
    //все задачи
    async getAllTasks():Promise<task[]>{
        const {$appAPI} = useNuxtApp()
        return await $appAPI('/allTasks')
    }

    async getTaskById(id:string){
        //потом написать так, чтобы не переносить в каждом методе
        const {$appAPI} = useNuxtApp()
        return await $appAPI(`task/${id}`)
    }

    async createTask(task: createTaskDTO){
        const {$appAPI} = useNuxtApp()
        return await $appAPI('/allTasks',{
            method: 'post',
            body: task

        })
    }
}