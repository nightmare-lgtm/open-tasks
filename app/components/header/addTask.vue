<script setup lang ="ts">
import taskService from '~/services/taskService';
import type { addTaskModel, contactsModel, task } from '~/types/tasks';

const useTaskService = new taskService()

const step = ref(0)

const contaktsModel = reactive<contactsModel>({
  phoneNumber: "",
  tg:"",
  max: "",
  wa: ""
})

const {data: allTasks, error: allTasksError } = await useAsyncData<task[]>('allTasks',
    ()=>useTaskService.getAllTasks(),
    {
        default:()=>[]
    }
) 

const dataAddTaskModel = reactive<addTaskModel>({
    nameTask: "",
    priceTask: "",
    locationTask: "",
    descriptionTask: "",
    taskNumber: allTasks.value.length+1,
    contaktsModel: contaktsModel
    
})


const emit = defineEmits<{
    closeModal: []
    addTask: [dataAddTaskModel:addTaskModel]
}>()

function closeModalTask(){
    emit('closeModal')
}

function addTask(){
    emit('addTask',dataAddTaskModel)
}


</script>

<template>
  <v-stepper v-model="step">

  </v-stepper>
    <div class="main ">
       <div class="stepper-header">
        <div class="row">
          <div class="col-xl-11">
            <div class="stepper-title">
              <h1 class="modal-title">Размещение заказа</h1>
            </div>
          </div>
          <div class="col-xl-1">
          
            <v-icon @click="closeModalTask" class="cancel-terminal">mdi-close-octagon</v-icon>
        
          </div>
        </div>

      <div class="stepper-status">
        Статус : Шаг {{ step + 1 }} из 2
      </div>

      <div class="stepper-description">
        {{ step === 0
            ? 'Информация о задаче'
            : 'Контактная информация'
        }}
      </div>

      <div class="progress-line">
        <div
          class="progress-fill"
          :class="{ full: step === 1 }"
        ></div>
      </div>

    </div>
    <div v-if="step===0">
        <div class="add-task-container">
          <h4 class="text-start mt-2">Название заказа</h4>
          <input type="text" class="add-task-input" v-model="dataAddTaskModel.nameTask">
          <h4 class="text-start mt-2">Оплата</h4>
          <input type="text" class="add-task-input" v-model="dataAddTaskModel.priceTask">
          <h4 class="text-start mt-2">Локация</h4>
          <input type="text" class="add-task-input" v-model="dataAddTaskModel.locationTask">
          <h4 class="text-start mt-2">Подробное описание</h4>
          <textarea class="add-task-textarea" v-model="dataAddTaskModel.descriptionTask"></textarea>
        </div>
        <div class="row modal-footer mt-4">
          <div class="col-xl-7 col-lg-0 col-sm-12"></div>
          <div class="col-xl-5 col-lg-12 col-sm-12">
            <button class="insomnia-btn btn-local" @click="step=1">Далее</button>
          </div>
        </div> 
    </div>
    
      <div v-if="step===1">
        <div class="add-task-container">
           <h4 class="text-start mt-2">Номер телефона</h4>
           <input type="text" class="add-task-input" v-model="contaktsModel.phoneNumber">
           <h4 class="text-start mt-2">Телеграмм</h4>
           <input type="text" class="add-task-input" v-model="contaktsModel.tg">
           <h4 class="text-start mt-2">MAX</h4>
           <input type="text" class="add-task-input" v-model="contaktsModel.max">
           <h4 class="text-start mt-2">WatshApp</h4>
           <input type="text" class="add-task-input" v-model="contaktsModel.wa">
        </div>
          
        <div class="modal-footer mt-4 ">
          <button class="btn-local btn-cansell " @click="step=0">Назад</button>
          <button class="insomnia-btn btn-local" @click="addTask">Создать</button>
        </div>
    </div>
    </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Russo+One&family=Share+Tech+Mono&family=Tektur:wght@500;600;700&display=swap');
.main {
  text-align: center;
  padding: 20px;
  background: linear-gradient(145deg,#2a2f35 0%,#313741 50%,#242830 100%);
  border: 1px solid rgba(218, 112, 214, 0.25);
  box-shadow:0 0 20px rgba(218, 112, 214, 0.15);
}

h4 {
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

.add-task-textarea {
 border:1px solid gray;
 border-radius: 5px;
 width: 100%;
 background-color: rgba(169, 169, 169,0.9);
}

.modal-title {
 font-family: 'Tektur', sans-serif;
 color:#DA70D6;
}

.modal-footer {
  display: flex;
  justify-content: space-between;

}

.btn-local{
  /* в медиа запросах убрать отступ на маленьких экранах */
    width: 15vw;
    margin-left: 8vw;
}

.btn-cansell{
    border:none;
    border-radius: 10px;
    padding: 5px;
      /* в медиа запросах убрать отступ на маленьких экранах */
    margin-left: -0.5vw;
}

.stepper-header{

    background:#1b2028;
    border:1px solid rgba(90,220,255,.25);
    border-radius:8px;
    padding:10px;
    margin-bottom:35px;
    box-shadow:0 0 18px rgba(90,220,255,.12);
    font-family:'Share Tech Mono', monospace;

}

.stepper-title{
  /* в медиа запросах убрать */
    margin-left: 7vw;
    color:#6de8ff;
    font-size:24px;
    letter-spacing:2px;
    text-shadow:0 0 8px rgba(109,232,255,.45);
}

.stepper-status {
    margin-top:14px;
    color:#ffc857;
    font-size:16px;
}

.stepper-description {
    margin-top:6px;
    color:#9fdfff;
    font-size:30px;
}

.progress-line {
    margin-top:18px;
    height:8px;
    background:#39404d;
    border-radius:4px;
    overflow:hidden;
}

.progress-fill {
    width:50%;
    height:100%;
    background:linear-gradient(
        90deg,
        #00d2ff,
        #7ef9ff
    );

    transition:.35s ease;

}

.progress-fill.full{

    width:100%;
}

.cancel-terminal{
  color: red !important;
  font-size: 30px;
}


</style>