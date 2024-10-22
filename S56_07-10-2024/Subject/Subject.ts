
import {Subject,Observable} from "rxjs"

    const sub  = new Subject()



const obs    = new Observable((observer)=>{
               observer.next(Math.random())
             })

             obs.subscribe((data)=>{
                console.log(data)
             })

             obs.subscribe((data)=>{
                console.log(data)
             })
             obs.subscribe((data)=>{
                console.log(data)
             })

console.log("============================================")
             sub.subscribe((data)=>{
                console.log(data)
             })

             sub.subscribe((data)=>{
                console.log(data)
             })

             sub.subscribe((data)=>{
                console.log(data)
             })

             sub.next(Math.random())