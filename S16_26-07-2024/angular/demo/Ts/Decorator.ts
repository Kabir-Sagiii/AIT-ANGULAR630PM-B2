function Logger(target:any){
 var l1 =     new target()
l1.name = "sagar"
l1.city = "hyd"
  console.log(l1.name)

}

@Logger
class C1 {
    name:string = "hello"
    city:string = "cds"
    constructor(){
        console.log("working")
    }
}

