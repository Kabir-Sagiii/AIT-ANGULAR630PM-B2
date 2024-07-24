import { Employe } from "./Employe"
class PEmployee extends Employe{

    insurance:string ;
 
 
    constructor(fName:string,lName:string,salary:number,insurance:string){
        super(fName,lName,salary)
        this.insurance = insurance
       
    }


}

var pe1 = new PEmployee("Raj","Verma",150000,"--------")

console.log(pe1.lastName)