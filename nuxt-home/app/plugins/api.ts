export default defineNuxtPlugin(()=>{
    const runtime = useRuntimeConfig()
    console.log(runtime.public.apiBase)
    const appAPI = $fetch.create({
        baseURL: runtime.public.apiBase
    })
    
return{
    provide:{
        appAPI: appAPI
    }
}
})