export type task = {
    id: string,
    title: string,
    price: string,
    address: string,
    description: string,
    taskNumber: number,
    contaktsModel: contactsModel
}

export type createTaskDTO = Omit<task, 'id'>

export type addTaskModel = {
    nameTask: string,
    priceTask: string,
    locationTask: string,
    descriptionTask: string,
    taskNumber: number,
    contaktsModel: contactsModel
}

// вспомогательные

export type contactsModel = {
  phoneNumber: string,
  tg: string,
  max: string,
  wa: string
}