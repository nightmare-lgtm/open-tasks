<script setup>
//разобраться с автоимпортом
import { useNotify } from './composables/helpers/useNotify';
const {modelNotify} = useNotify()
</script>
<template>
  <div class="global">
  <NuxtLayout>
     <NuxtPage/>
     <v-snackbar
      v-model="modelNotify.isShow"
      timeout="10000"
      location="bottom right"
      class="insomnia-snackbar"
     >
       <div
  class="insomnia-notify"
  :class="`insomnia-notify--${modelNotify.type}`"
>
  <v-icon class="insomnia-icon">
    {{ modelNotify.icon }}
  </v-icon>

  <div class="insomnia-content">
    <div class="insomnia-title">
      {{ modelNotify.title }}
    </div>

    <div class="insomnia-description">
      {{ modelNotify.description }}
    </div>
  </div>
</div>
     </v-snackbar>
  </NuxtLayout>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&display=swap');
:deep(.v-snackbar__wrapper) {
  background: transparent !important;
  box-shadow: none !important;
}
.global{
  background-color: #C0C0C0;
  padding: 2px;
}

.insomnia-notify {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 320px;
  min-height: 70px;
  padding: 14px 16px;
  box-sizing: border-box;
  background: #1a1e24;
  border: 1px solid #3a3f48;
  font-family: 'Exo 2', sans-serif;
}
.insomnia-icon {
  margin-top: 2px;
}

.insomnia-title {
  font-size: 15px;
  font-weight: 600;
}

.insomnia-description {
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #B8C0CC;
}

.insomnia-description {
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #e5e5e5;
}


.insomnia-notify--info {
  border-left: 3px solid #00C8FF;
}

.insomnia-notify--info .insomnia-icon,
.insomnia-notify--info .insomnia-title {
  color: #00C8FF !important;
}

.insomnia-notify--warning {
  border-left: 3px solid #F5B400;
}

.insomnia-notify--warning .insomnia-icon,
.insomnia-notify--warning .insomnia-title {
  color: #F5B400 !important;
}

.insomnia-notify--error {
  border-left: 3px solid #F04B6A;
}

.insomnia-notify--error .insomnia-icon,
.insomnia-notify--error .insomnia-title {
  color: #F04B6A !important;
}
</style>
