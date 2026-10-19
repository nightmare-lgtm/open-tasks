
<script setup lang ="ts">   
import L from 'leaflet'
import { onMounted, ref } from 'vue';
import 'leaflet/dist/leaflet.css'

const containerMap = ref<HTMLElement | null>(null)

const props = defineProps<{
    lat: number,
    long: number
}>()

onMounted(()=>{
     console.log('container:', containerMap.value)
    if(!containerMap.value){
        return
    }
    const map = L.map(containerMap.value, { attributionControl: false }).setView([props.lat, props.long],12)
    L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: ''
    }).addTo(map)
    L.marker([props.lat, props.long]).addTo(map)
})
</script>

<template>
    <div ref="containerMap" class="map"></div>
</template>

<style scoped>
.map{
    width:80%;
    height:400px;
    border:1px solid red;
}
</style>