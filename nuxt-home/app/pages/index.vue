<script  setup lang="ts">
definePageMeta({
    layout: 'default'
})

import Card from '~/components/Main/Card.vue'
import taskService from '../services/taskService'
import type { task } from '~/types/tasks'


const useTaskService = new taskService()

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
    <div class="main-page container-fluid">
        <div class="row">
            <div class="col-12">
              <h4 class="text-center active-task-head mt-3">Активные объявления</h4>
            </div>
        </div>
        <div class="row mt-4">
           <div 
             v-for="(titleCard, idx) in allTasks" 
             :key="idx" 
             class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4" 
            >
                <Card
                    :name="titleCard.title"
                    :count-task="idx + 1"
                    :price="titleCard.price"
                    :location="titleCard.address"
                    :numberTask="titleCard.taskNumber"
                    @request-about="openCard"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-page {
  background-color: #20232A;  
    padding: 10px 10px 100px 10px;
}

.active-task-head {
  font-family: 'Oxanium', sans-serif;
  font-weight: 700; 
  font-size: 1.5rem; 
  color: #ffffff; 
  text-transform: uppercase; 
  letter-spacing: 2px; 
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.9); 
}

h4 {
   color:rgba(255, 255, 240,1)
}
.card-block-title{
  text-align: center;
}
</style>