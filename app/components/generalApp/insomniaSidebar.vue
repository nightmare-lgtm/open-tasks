<script setup lang ="ts">
const isOpen = ref(false)
</script>

<template>
    <aside class="main-sidebar" :class="{openSidebar:isOpen}">
        <div class="sidebar-wrapper">
          <button @click="isOpen=!isOpen">☰</button>
          <button>⚙</button>
        </div>
        
    </aside>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Russo+One&family=Share+Tech+Mono&family=Tektur:wght@500;600;700&display=swap');

.main-sidebar{
    display: flex;
    flex-direction: column;
    background: black;
    width: 60px;
}
.sidebar-wrapper{
    display: flex;
    flex-direction: column;
   button{
    margin: 7px;
   }
}

.openSidebar{
      width: 260px;
}
</style>