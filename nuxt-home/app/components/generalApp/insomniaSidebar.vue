<script setup lang ="ts">
import SettingsModal from './settingsModal.vue';

const isOpen = ref(false)
</script>

<template>
    <aside class="main-sidebar" :class="{openSidebar:isOpen}">
        <div class="sidebar-wrapper">
          <button class="sidebar-btn" @click="isOpen=!isOpen">
            <v-icon v-show="!isOpen">mdi-menu</v-icon> 
            <span v-show="isOpen" class="btn-description">Свернуть</span>
        </button>
          <button>
            <v-icon v-show="!isOpen">mdi-cog-outline</v-icon>
            <span v-show="isOpen" class="btn-description">Настройки</span>
        </button>
        </div>
    </aside>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Russo+One&family=Share+Tech+Mono&family=Tektur:wght@500;600;700&display=swap');

.main-sidebar{
    display: flex;
    flex-direction: column;
    background: #15151b;
    border-right: 1px solid rgba(160, 32, 240, 0.3);
    width: 60px;
    transition: width 0.3s ease;
}
.sidebar-wrapper{
    display: flex;
    flex-direction: column;
   button {
    display: flex;
    margin: 7px;
    background: transparent; 
    border: none;
    color: #8A8A9E; 
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
   }
}

.btn-description {
    margin: 5px;
}
.btn-description:hover{
    color:rgba(100, 200, 255, 0.5);
}

.openSidebar {
    width: 200px;
}
.openBtn {
  align-items: start;
}
</style>