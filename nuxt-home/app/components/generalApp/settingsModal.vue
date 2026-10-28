<script setup lang ="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
   'update:modelValue': [value:boolean]
}>()


function closeModal(){
  emit('update:modelValue',false)
}

</script>

<template>
 <div class="settings-container" v-if="props.modelValue">
    <div class="settings-modal-backdrop"></div>
    <div class="settings-header">
        <h1 class="text-center">Настройки приложения</h1>
        <button @click="closeModal">Закрыть</button>
    </div>
    <div class="general-settings">
        <h4>Язык</h4>
    </div>
 </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Russo+One&family=Share+Tech+Mono&family=Tektur:wght@500;600;700&display=swap');
.setting-container {
   background: rgba(10, 10, 15, 0.9); 
   backdrop-filter: blur(10px);
   background-color: #16161a;
   display: flex;
   flex-direction: row;
}
.settings-modal-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);
}
.settings-header{
 flex: 3;
}
.general-settings {
 display: flex;
 justify-content: center;
 align-items: center;
 flex: 1
}
</style>