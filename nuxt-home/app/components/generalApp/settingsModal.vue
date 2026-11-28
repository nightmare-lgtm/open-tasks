<script setup lang ="ts">
import { useColorBackground } from '~/composables/general/useSettingsApp';

const { locale, setLocale, t } = useI18n()
const {bgStyle, currentBackground, isDefault} = useColorBackground()

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
  <div class="settings-content" :style="bgStyle" >
    <div class="settings-content-header">
      <h1 class="main-header" :class="{noDefault: !isDefault}">{{ t('settings.settingsTitle') }}</h1>
      <button class="close-btn" @click="closeModal">Х</button>
    </div>
    <div class="main-section mt-4">
      <details class="lang-details">
        <summary class="lang-summary" :class="{ noDefault: !isDefault }">
          <span>{{ t('settings.btnTitles.Language') }}</span>
        </summary>
        <div class="list-lang">
          <!-- сейчас руками добавляю, но для масштабирования лучше список языков 
          и цикл перебора по нему -->
          <button 
            class="lang-btn"
            :class="{activeBtnLang: locale === 'ru'}"
            @click="setLocale('ru')"
          >
            <span class="fi fi-ru icon-country"></span>
            <span class="p-1">Русский</span>
          </button>
          <button 
            class="lang-btn"
            :class="{activeBtnLang: locale === 'en'}"
            @click="setLocale('en')"
            >
            <span class="fi fi-gb icon-country"></span>
            <span class="p-1">English</span>
          </button>
          <button
            class="lang-btn"
            :class="{activeBtnLang: locale === 'kk-Latn'}"
            @click="setLocale('kk-Latn')"
           >
          <span class="fi fi-kz icon-country"></span>
          <span class="p-1">Qazaqşa</span>
          </button>
          <button 
            class="lang-btn"
            :class="{activeBtnLang: locale === 'sr-Cyrl'}"
            @click="setLocale('sr-Cyrl')"
            
          >
          <span class="fi fi-rs icon-country"></span>
          <span class="p-1">Српски</span>
          </button>
        </div>
      </details>
      <div class="slider-wrapper">
        <v-slider
          :min="0"
          :max="360"
          :step="1"
          v-model="currentBackground"
        />
      </div>
      
    </div>

  </div>
 </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Russo+One&family=Share+Tech+Mono&family=Tektur:wght@500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600&family=Oswald:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
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
  background: var(--main-bg-color);
  padding:20px;
  border: 1px solid rgba(0, 240, 255, 0.3); 
  width: min(800px, calc(100vw - 40px));
  height: min(400px, calc(100vh - 40px));
  box-sizing: border-box;
  overflow: auto;
}

.lang-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.main-header {
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
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

.slider-wrapper {
  width: 100%;
  max-width: 500px; 
  margin: 20px auto 0 auto; 
}

.slider-wrapper :deep(.v-slider-track__background) {
 background: linear-gradient(to right, 
  hsl(0, 60%, 75%), 
  hsl(60, 60%, 75%), 
  hsl(120, 60%, 75%), 
  hsl(180, 60%, 75%), 
  hsl(240, 60%, 75%), 
  hsl(300, 60%, 75%), 
  hsl(360, 0%, 75%)
  ) !important;
  opacity: 1 !important;
  height: 8px !important; 
  border-radius: 4px;
}

.main-section {
  display: flex;
  align-items: center;
  width: 100%;
  

  justify-content: center;
  color: #9a9388;
  flex-direction: column;
}

.list-lang {
  display: flex;
  flex-direction: column;

}
.lang-summary {
  font-size: 1.5rem;
  font-family: 'Pirata One', cursive;
}

.lang-btn {
 margin: 5px;
 border: none;
 border-radius: 10px;
}

.activeBtnLang {
  background-color: orange;
}

.icon-country {
  font-size: 0.8rem;
}

.lang-summary::-webkit-details-marker {
  display: none;
}
.lang-summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px 0;
  outline: none;
}


.lang-summary::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 8px solid #9a9388;
  transition: transform 0.2s ease, border-left-color 0.2s ease;
}

details[open] .lang-summary::before {
  transform: rotate(90deg);
}

.lang-summary.noDefault::before {
  border-left-color: black;
}

.noDefault {
  color:black
}

</style>