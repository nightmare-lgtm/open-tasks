<script  setup lang="ts">
import ShowContact from '~/components/taskNumber/showContact.vue';
import { useTaskAbout } from '~/composables/tasks/useTaskAbout';
import GeoCoder from '~/services/geocoderService';
import taskService from '~/services/taskService';
import type { task } from '~/types/tasks';


import mapComponent from '~/components/taskNumber/mapComponent.vue';
import WarningModal from '~/components/generalApp/warningModal.vue';

definePageMeta({
    layout: 'default'
})

const useTaskService = new taskService()
const useGeoCoderService = new GeoCoder()
const route = useRoute()

const isShowConnectModal = ref(false)
const coordinatesTask = ref()

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

//мы передаем заранее для конкретной страницы все задачи сюда
//и потом используем отдельные ее композеблс для обработки того что нам нужно

const { returnTaskByNumber } = useTaskAbout(allTasks)

//вынести ее в хелперы . и возможно сделать универсальный возвращает не число
//а дженерик
function parseParamsUrl(params:string | string[] | undefined):number{
  const resultNumber = Number(params)
  if(Number.isNaN(resultNumber)){
  throw createError({
      statusCode: 404,
      statusMessage: 'Invalid task number'
    })
  } else {
  return resultNumber
  }
}
console.log(route.params)
const currentTaskNumber = parseParamsUrl(route.params.taskNumber)
const currentTask:task | undefined = returnTaskByNumber(currentTaskNumber)

const isVisibleConfirm = ref<boolean>(false);

function convertGeocoderCoordinates(coordinates: any) {
  console.log(coordinates.value)
  const pos =
    coordinates.value.response
      .GeoObjectCollection.featureMember[0]
      .GeoObject.Point.pos

  return pos.split(" ")
}

if(currentTask?.address){ 
  const {data: geoCode, error: geCodeError} = await useAsyncData<any>( 
    ()=>useGeoCoderService.getGeocode(currentTask?.address) ) 
    console.log(geoCode.value)
    // coordinatesTask.value = convertGeocoderCoordinates(geoCode) 
    console.log(coordinatesTask.value) 
  coordinatesTask.value = convertGeocoderCoordinates(geoCode)
  console.log(coordinatesTask.value)
  }



</script>

<template>
    <div class="main container-fluid">
      <div class="row">
        <div class="col-xl-5">
      
          <h1 class="order-title mb-4">Заказ №{{ currentTask?.taskNumber }}</h1>
          <h3>
            <span class="order-title-name mt-0">Название: </span>
            <span class="order-title-text">{{ currentTask?.title }}</span>
          </h3>
          <h4>
            <v-icon class="info-icon pr-2">mdi-cash</v-icon>
            <span class="order-title-description">Оплата: </span>
            <span>{{ currentTask?.price }} </span>
          </h4>
          <h4>
            <v-icon class="info-icon pr-2">mdi-map-marker</v-icon>
            <span class="order-title-description">Локация: </span> 
            <span>{{ currentTask?.address }}</span>
          </h4>
          <h4>
            <v-icon class="info-icon pr-2">mdi-text-box-outline</v-icon>
            <span class="order-title-description">Описание: </span>
            <span>{{ currentTask?.description }} </span>
          </h4>
          <div class="card-footer">
             <button 
              class="insomnia-btn btn-connect mt-3"
              @click="isShowConnectModal= !isShowConnectModal"
            >
              Связаться с заказчиком
            </button>
            <button class="insomnia-btn mt-3" @click="isVisibleConfirm=!isVisibleConfirm">
              Закрыть задачу
            </button>
          </div>
        </div>
        <div class="col-xl-6 mt-2 map-container">
          <client-only>
            <map-component
            :lat="coordinatesTask[1]"
              :long="coordinatesTask[0]"
            >
            </map-component>
          </client-only>
        </div>
      </div>
    </div>
    
    <!-- возможно для модалок стоит использовать v-card еще внутри -->
      <v-dialog 
        v-model="isShowConnectModal"
        max-width="900"
        max-height="500"
        opacity="0.7"
        >
        <show-contact
          v-if="currentTask"
          :currentTask="currentTask"
        />
    </v-dialog>

    <warning-modal
      v-model="isVisibleConfirm"
    />
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@500;600&display=swap');
.main {
  background: linear-gradient(135deg,#23272e 0%,#1d2127 50%, #181b20 100%);
  padding: 20px;
  height: 90vh;
  color:white;
  overflow: auto;
}

.order-title {
    font-family: 'Exo 2', sans-serif;
    font-size: 44px;
    font-weight: 700;
    color: #8fd8ff;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(120,220,255,.45);
}

.order-title-name {
    font-family: 'Russo One', sans-serif;
    font-size: 34px;
    color: rgba(175, 238, 238,1);
    letter-spacing: 1.5px;
    text-shadow: 5px 5px 5px rgba(120,220,255,.18);
}

.order-title-text {
    font-family:'Exo 2',sans-serif;
    font-size:30px;
}

.order-title-description {
    font-family:'Orbitron',sans-serif;
    font-size:20px;
    font-weight:500;
    letter-spacing:2px;
    color:#7fd7ff;
}

.btn-connect {
  color: black !important;
}

.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
 
}

.card-footer {
  display: flex;
  justify-content: space-between;
  width: 70%;
  color:black;
}
@media(max-width:768px){
  .card-footer{
    width: 100%;
    margin-bottom: 40px;
    flex-direction: column;
  }
  .map-container{
    margin-top: 90px;
  }
}

@media (min-width: 768px) and (max-width: 1040px) {
  .card-footer{
    width: 100%;
    flex-direction: column;
    margin-bottom: 40px;
  }
}

</style>