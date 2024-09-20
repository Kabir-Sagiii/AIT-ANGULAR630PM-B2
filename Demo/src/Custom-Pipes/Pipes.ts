import { PipeTransform,Pipe } from "@angular/core";
@Pipe({
    name:"surname",
    standalone:true,
    pure:false
})
export class FilterPipe implements PipeTransform{
   
    transform(value:string,name?:string) {
        console.log("running")
        if(name==="Raj"){
  return value + "Reddy"
        }else {
            return value + "Goud"
        }
      
    }
 

}
