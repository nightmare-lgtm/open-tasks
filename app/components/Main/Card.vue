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
        <h6 class="text-center">{{ props.name }}</h6>
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
        <Button class="insomnia-btn" @click="handleClickMore()">Подробнее</Button>
    </div>

</div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;1,400;1,500&display=swap');

.task-card{
    background-color: rgba(220, 220, 220,0.5);
    width: 20vw;
    height: auto;
    margin: 20px;
    padding: 10px;
    border-radius: 5%;
    box-shadow: 0 0 20px rgba(100, 200, 255, 0.5);
}
h4{
 font-family: 'Exo 2', sans-serif;
}

h6{
     /* font-family: 'Chakra Petch', sans-serif;
       transform: skewX(-10deg); */
      font-family: 'Oxanium', sans-serif;
      transform: skewX(-15deg);
}

.bold{
    font-weight: 700;
}

.pin-ico{
    color:darkred;
    /* transform: skewX(-8deg); */
}

</style>