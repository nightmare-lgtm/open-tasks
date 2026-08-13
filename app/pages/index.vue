<script  setup lang="ts">
definePageMeta({
    layout: 'default'
})

import Card from '~/components/Main/Card.vue'
import taskService from '../services/taskService'
import type { task } from '~/types/tasks'
import { title } from 'node:process'


const useTaskService = new taskService()

//нужен ли try catch?
const {
    data: allTasks,
    error: allTasksError,
} = await useAsyncData<task[]>(
    'allTasks',
    () => useTaskService.getAllTasks(),
    {
        default:()=>[]
    }
)   


function openCard(taskNumber:number){
    navigateTo(`/about-task/${taskNumber}`)
}

</script>

<template>
    <div class="main-page">
        <h4 class="text-center ">Активные объявления</h4>
        <div class="card-block mt-4">
            <Card v-for="(titleCard,idx) in allTasks"
                :name = titleCard.title
                :count-task="idx+1"
                :price="titleCard.price"
                :location = "titleCard.address"
                :numberTask="titleCard.taskNumber"
                @request-about="openCard"
            />
        </div>
    </div>
</template>

<style scoped>
.main-page{
    background-color:rgba(47, 52, 58, 0.7);
    padding: 20px;
    height: 90vh;
}
.all-users{
    display: flex;
    background-color: red;
    padding: 400px;
}
h4{
   color:rgba(255, 255, 240,1)
}
.card-block{
  display: flex;
  flex-wrap: wrap;
}
.card-block-title{
  text-align: center;
}

</style>