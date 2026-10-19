<script setup lang ="ts">


</script>

<template>
<Teleport to="body">
  <div class="main-draggable">
    <h4>Тут будут располагаться фото</h4>
    <button>Закрыть</button>
  </div>
</Teleport>

</template>
<style scoped>
.main-draggable{
    display: flex;
    flex-direction: column;
}
</style>