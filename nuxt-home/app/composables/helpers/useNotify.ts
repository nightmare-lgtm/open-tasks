const modelNotify = reactive({
  isShow: false,
  type: "",
  title: "",
  description: "",
  icon: ""
})

function createNotify(outcomeAction: string, descriptionAction: string)
 {
    //вынести тож в литералы
    if (outcomeAction === "success") {
        modelNotify.isShow = true
        modelNotify.type = "info"
        modelNotify.title = "Уведомление: информация"
        modelNotify.description = descriptionAction
        modelNotify.icon = "mdi-information-outline"
    }

     if (outcomeAction === "error") {
        modelNotify.isShow = true
        modelNotify.type = "error"
        modelNotify.title = "Уведомление: ошибка"
        modelNotify.description = descriptionAction
        modelNotify.icon = "mdi-alert-circle-outline"
    }

     if (outcomeAction === "warning") {
        modelNotify.isShow = true
        modelNotify.type = "warning"
        modelNotify.title = "Уведомление: предупреждение"
        modelNotify.description = descriptionAction
        modelNotify.icon =  "mdi-alert-outline"
    }
}

export function useNotify(){
   return {
    modelNotify,
    createNotify
   }
}