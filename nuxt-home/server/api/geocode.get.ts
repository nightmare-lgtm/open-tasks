import geocodeCash from "./utils/geoCoderCache"

export default defineEventHandler(async (event) =>{
     const config = useRuntimeConfig() 
     const query = getQuery(event) 
     //вынести fetch к http клиенту как отдельный fetch 
     if(typeof(query.address) === "string" ){ 
        if(geocodeCash.has(query.address ))
            { 
                return geocodeCash.get(query.address)
             } }
      return await $fetch( 'https://geocode-maps.yandex.ru/1.x/',{
         query: { 
            apikey: config.yandexApiKey, 
            geocode: query.address, 
            lang: "ru_RU", 
            format: "json"
         } 
    } 
)  
 })