<script setup lang = "ts">
import AddTask from '~/components/header/addTask.vue';
import taskService from '~/services/taskService';
import type { addTaskModel, createTaskDTO } from '~/types/tasks';
import { useNotify } from '~/composables/helpers/useNotify';
import InsomniaSidebar from '~/components/generalApp/insomniaSidebar.vue';

const{createNotify} = useNotify() 

const useTaskService = new taskService()

const isShowTaskModal = ref<boolean>(false)

const route = useRoute();
const $router = useRouter()

//пока проверяет есть ли вложенность в виде параметров (пока только генерируемых)
const hasParams = computed(()=>(Object.keys(route.params).length>0))

async function addTask(task: addTaskModel) {
    const taskPayload:createTaskDTO = {
        title: task.nameTask,
        price: task.priceTask,
        address: task.locationTask,
        description: task.descriptionTask,
        taskNumber: task.taskNumber,
        contaktsModel: task.contaktsModel
    }
    
    //добавить всплывашки 
    try {
        await useTaskService.createTask(taskPayload)
        await refreshNuxtData('allTasks')
        createNotify("success","задача успешно создана!")
        isShowTaskModal.value = false
        
    } catch(e) {
        console.error(e)
    }
}

function goToBack(){
    $router.back()
}

</script>
<template>
    <div class="default-layout">
        <header>
            <div class="header container-fluid">
                <div class="row">
                    <div class="col-xl-2">
                        <button 
                            class="btn-arrow mt-1" 
                            v-if="hasParams"
                            @click="goToBack()">
                        <v-icon size="30">mdi-arrow-left</v-icon>
                        </button>
                    </div>
                    <div class="col-xl-4"></div>
                    <div class="col-xl-4"></div>
                    <div class="col-xl-2">
                        <button 
                            class="insomnia-btn"
                            @click="isShowTaskModal=!isShowTaskModal"
                        >
                        Разместить заказ
                        </button>
                    </div>
                </div>
                <h1 class="main-head text-center"></h1>
            </div>
        </header>
        <main>
        <InsomniaSidebar class="sidebars"/>
            <section>
                <slot></slot>
            </section>
        </main>
        
        <footer>
            <div class="footer">
                <v-icon color="#00f0ff" size="14" class="mr-2">mdi-circle</v-icon>
                <span>Система активна</span>
            </div>
        </footer>
    </div>

        
    <v-dialog 
        v-model="isShowTaskModal"
        max-width="900"
        opacity="0.7"
        >
        <AddTask 
          @closeModal="isShowTaskModal=!isShowTaskModal"
          @add-task="addTask"
          />
    </v-dialog>
</template>
<style>
.default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
}
.header {
    padding: 20px;
    background: rgba(26, 26, 34, 0.85);
    box-shadow:0 12px 35px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0, 240, 255, 0.2); 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); 
}

main {
  display: flex;
  flex:1;
}

section{
  flex:1;
}

.footer{
  background: rgba(26, 26, 34, 0.85); 
  backdrop-filter: blur(10px); 
  border-top: 1px solid rgba(0, 240, 255, 0.2);
  padding: 15px 40px;
  margin-top: auto;
  font-family: 'Oxanium', sans-serif;
  text-align: center;
  color: #8A8A9E; 
}
.main-head-footer{
    font-size: 20px;
    color:aqua;
    text-shadow: 1px 1px 1px black;
}

.bloc {
  background-color: red;
}

.btn-arrow {
  background: rgba(255, 255, 255, 0.05); 
  border: 1px solid rgba(0, 240, 255, 0.3); 
  color: #00f0ff;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
}

.default-sidebar{
    background-color: red;
    width: 20px;
    height: 20px;
}
</style>