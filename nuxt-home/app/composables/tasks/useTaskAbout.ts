
import type { task } from "~/types/tasks";
//потом назвать более обширно. композеблс может использоваться с разных страниц
export function useTaskAbout(allTask: Ref<task[]>){
  function returnTaskByNumber(numbTask: number): task | undefined {
    return allTask.value.find((task:task)=>(task.taskNumber === numbTask))
 }
 return{
    returnTaskByNumber
 }
}
