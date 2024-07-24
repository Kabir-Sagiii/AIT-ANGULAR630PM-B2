export class Employe{
  protected  firstName:string 
    lastName:string
    salary:number 

     constructor(fName:string,lName:string,salary:number){
this.firstName = fName 
this.lastName = lName 
this.salary = salary
    }
}

var emp1 = new Employe("rohan","goud",123456)
emp1.lastName 
emp1.salary
// emp1.firstName