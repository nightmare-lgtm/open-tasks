//Это композебл только для управления открытием/закрытием модалки настроек
//Чтобы за ее открытие не отвечал компонент сайдбара 
//И она находилась на уровне app.vue
//Для управления самими настройками приложения используется композебл 
//general => useSettingsApp

const modelSettings = ref<boolean>(false);

function changeModelSettings(){
    console.log("даа")
  modelSettings.value = !modelSettings.value 
}

export function useSettingsModal() { 
  return {
    modelSettings,

    changeModelSettings
  }
  
}