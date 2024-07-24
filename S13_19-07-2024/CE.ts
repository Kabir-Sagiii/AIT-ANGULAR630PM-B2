import { Employe } from "./Employe"
class CEmployee extends Employe{

  
    duration : number ;

    constructor(fName:string,lName:string,salary:number,duration:number){
        super(fName,lName,salary)
        
        this.duration = duration
            }

            display(){
                console.log(this.firstName)
            }
}

 var ce1=   new CEmployee("Sneha","Reddy",100000,8)

 console.log(ce1.lastName,ce1.salary)