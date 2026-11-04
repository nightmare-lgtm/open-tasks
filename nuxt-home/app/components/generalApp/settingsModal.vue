<script setup lang ="ts">
const { locale, setLocale } = useI18n()

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
  <div class="settings-backdrop"></div>
  <div class="settings-content">
    <div class="settings-content-header">
      <h1 class="main-header">Настройки</h1>
      <button class="close-btn" @click="closeModal">Х</button>
    </div>
    <div class="main-section mt-4">
      <details>
        <summary class="lang-summary">Язык</summary>
        <div class="list-lang">
          <!-- сейчас руками добавляю, но для масштабирования лучше список языков 
          и цикл перебора по нему -->
          <button 
            class="lang-btn"
            :class="{activeBtnLang: locale === 'ru'}"
            @click="setLocale('ru')"
          >
            Русский
          </button>
          <button 
            class="lang-btn"
            :class="{activeBtnLang: locale === 'en'}"
            @click="setLocale('en')"
            >
            Английский
          </button>
          <button class="lang-btn">Казахский</button>
          <button class="lang-btn">Сербский</button>
        </div>
  
      </details>
    </div>

  </div>
 </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Russo+One&family=Share+Tech+Mono&family=Tektur:wght@500;600;700&display=swap');
.settings-container {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.settings-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: rgba(5, 5, 7, 0.7);
  backdrop-filter: blur(2px);
}

.settings-content {
  position: relative;
  z-index: 1;
  background: #16161a;
  padding:20px;
  border: 1px solid rgba(0, 240, 255, 0.3); 
  width: min(800px, calc(100vw - 40px));
  height: min(400px, calc(100vh - 40px));
  box-sizing: border-box;
  overflow: auto;
}

.main-header {
  flex:1;
  text-align: center;
  margin: 0;
  color: #9a9388;
  line-height: 1.2; 
  position: relative;
}

.settings-content-header {
  display: flex;
  align-items: center;
}

.close-btn {
  position: absolute;
  right:10px;
  top:5px;
  margin-left: auto;
  border: none;
  width: 20px;
  height: 25px;
  background-color: transparent;
  color:white;
  padding: 0;
  font-size: 1rem; 
}

.main-section {

  display: flex;
  align-items: center;
  justify-content: center;
  color: #9a9388;
}

.list-lang {
  display: flex;
  flex-direction: column;

}
.lang-summary {
  font-size: 1.5rem;
}

.lang-btn {
 margin: 5px;
 border: none;
 border-radius: 10px;
}

.activeBtnLang {
  background-color: orange;
}

</style>