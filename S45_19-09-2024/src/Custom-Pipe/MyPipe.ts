import {PipeTransform,Pipe} from "@angular/core"

@Pipe({
   name:"mycustompipe",
   standalone:true
})
export class MyPipe implements PipeTransform {

      transform(value: any, ...args: any[]) {
            value = JSON.parse(value)
           
        return [value[args[0]],value[args[1]]]
      }
}