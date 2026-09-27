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
 <div class="warning-container" v-if="props.modelValue">
  <div class="warning-backdrop"></div>
    <div class="warning-content">
      <h1 class="text-center">Вы действительно собираетесь сделать это?</h1>
      <div class="warning-text">
        <h4 class="">Может привести к плохим последствиям!</h4>
      </div>
      <div class="warning-footer">
        <button class="insomnia-btn">Продолжить</button>
         <button class="insomnia-btn " @click="closeModal">Отменить</button>
      </div>
    </div>
 </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Russo+One&family=Share+Tech+Mono&family=Tektur:wght@500;600;700&display=swap');
.warning-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    position: fixed;
    inset: 0;
    z-index: 9999;
}
.warning-content{
  inset: 5;
  position: relative;
  display: flex;
  padding: 10px;
  width: min(800px, calc(100vw-40px));
  height: min(400px,100vh - 40px);
  overflow: auto;
  flex-direction: column;
  align-items: center;
      border:2px solid red;
    background-color: red;
}
.warning-footer{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  margin-top: auto;
}

.warning-backdrop{
    position: absolute;
  inset: 0;
  z-index: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);
}

.warning-text{
 position: absolute;
 top:50%;
}
</style>