<script setup lang ="ts">
const props = defineProps<{
    name: string,
    countTask: number,
    price:string,
    location: string,
    numberTask: number
}>()

const emit = defineEmits<{
 requestAbout: [countTask:number]
}>()

const numberTask = props.numberTask

function handleClickMore(){
    emit('requestAbout',numberTask)
}
</script>

<template>
<div class="task-card">
    <h4 class="text-center">Заказ № {{ props.numberTask }} </h4>
    <div class="card-title">
        <h6 class="text-center main-head">{{ props.name }}</h6>
        <h6 class="text-center"> 
            <v-icon class="pin-ico mb-2">mdi-pin</v-icon>
            <span class="bold"> Оплата:</span> {{ props.price }}
        </h6>
        <h6 class="text-center">
            <v-icon class="pin-ico mb-2">mdi-pin</v-icon>
            <span class="bold">Локация:</span> {{ props.location }}
        </h6>
    </div>
    <div class="card-body text-center mt-4">
        <button class="insomnia-btn" @click="handleClickMore()">Подробнее</button>
    </div>

</div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;1,400;1,500&display=swap');

.task-card {
    background: #24242e;
    height: auto;
    margin: 20px;
    padding: 15px;
    border-radius: 16px;
    border: 1px solid rgba(160, 32, 240, 0.3);
    box-shadow: 0 0 20px rgba(100, 200, 255, 0.5);
}

h4 {
 font-family: 'Exo 2', sans-serif;
 color: #ff66cc;
 text-shadow: 0 0 10px rgba(255, 102, 204, 0.5);
  font-weight: bold;
  padding: 5px;
}

h6 {
  font-family: 'Oxanium', sans-serif;
  transform: skewX(-15deg);
  color: #E0E0E0;
  font-weight: 400;
}

.main-head {
  font-family: 'Chakra Petch', sans-serif;  
  font-style: italic; 
  color: #00f0ff; 
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
  font-weight: 700;
  transform: none; 
  margin-bottom: 15px; 
  letter-spacing: 0.5px;
}

.bold {
 font-weight: 700;
}

.pin-ico{
    color:darkred;
    /* transform: skewX(-8deg); */
}
</style>