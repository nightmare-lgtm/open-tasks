<script setup lang ="ts">
import taskService from '~/services/taskService';
import { type contactsModel, type addTaskModel, type task } from '~/types/tasks';

const props = defineProps<{currentTask:task}>()

const contacts = ref<contactsModel>(props.currentTask.contaktsModel)
console.log(contacts.value)

const useTaskService = new taskService()

const {data: allTasks, error: allTasksError } = await useAsyncData<task[]>('allTasks',
    ()=>useTaskService.getAllTasks(),
    {
        default:()=>[]
    }
) 

//добавить сущность и роль Заказчик

const emit = defineEmits<{
    closeModal: []
    addTask: [dataAddTaskModel:addTaskModel]
}>()

function closeModalTask(){
    emit('closeModal')
}

function parsePropsContactModel(contact:string){
  return contact.trim() || "Не указано"
}

</script>
//в будущем бы было интересно сделать онлайн чат между заказчиком и исполнителем
<template>
    <div class="main">
        <h1 class="modal-title">Связь с заказчиком</h1>
        
          <h4 class="text-сenter mt-2 modal-head">Вы можете связаться с заказчиком через оставленные им контакты</h4>
          <div class="connet-container mt-4">
            <h1 class="order-title mb-4 text-start">Заказчик:</h1>
            <h4 class="text-start">
            <v-icon class="info-icon pr-2">mdi-map-marker</v-icon>
            <span class="order-title-description">Номер телефона: </span> 
            <span>{{ parsePropsContactModel(contacts.phoneNumber) }}</span>
          </h4>
          <h4 class="text-start">
            <v-icon class="info-icon pr-2">mdi-map-marker</v-icon>
            <span class="order-title-description">Телеграмм: </span> 
            <span>{{ parsePropsContactModel(contacts.tg) }}</span>
          </h4>
          <h4 class="text-start">
            <v-icon class="info-icon pr-2">mdi-map-marker</v-icon>
            <span class="order-title-description">MAX: </span> 
            <span>{{ parsePropsContactModel(contacts.max) }}</span>
          </h4>
          <h4 class="text-start">
            <v-icon class="info-icon pr-2">mdi-map-marker</v-icon>
            <span class="order-title-description">WatsApp </span> 
            <span>@{{ parsePropsContactModel(contacts.wa) }}</span>
          </h4>
          </div>
          
        <!-- <div class="modal-footer mt-4">
          <button class="btn-local btn-cansell" @click="closeModalTask()">Отменить</button>
          <button class="insomnia-btn btn-local" @click="addTask">Создать</button>
        </div> -->
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tektur:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@500;600&display=swap');
.main {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  background: linear-gradient(145deg,#2a2f35 0%,#313741 50%,#242830 100%);
  border: 1px solid rgba(218, 112, 214, 0.25);
  box-shadow:0 0 20px rgba(218, 112, 214, 0.15);
}

.order-title{
    font-family: 'Exo 2', sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: #8fd8ff;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(120,220,255,.45);
}

.connet-container{
    flex:1
}

.modal-head {
 color: #daa520;
 font-size:20px;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.add-task-input {
 border:1px solid gray;
 border-radius: 5px;
 height: 5vh;
 width: 100%;
 background-color: rgba(169, 169, 169,0.9);
}

.add-task-textarea{
 border:1px solid gray;
 border-radius: 5px;
 width: 100%;
 background-color: rgba(169, 169, 169,0.9);
}

.modal-title{
 font-family: 'Tektur', sans-serif;
 color:#DA70D6;
}

/* .modal-footer{
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.btn-local{
    width: 20vw;
}

.btn-cansell{
    border:none;
    border-radius: 10px;
    padding: 5px;
} */

</style>