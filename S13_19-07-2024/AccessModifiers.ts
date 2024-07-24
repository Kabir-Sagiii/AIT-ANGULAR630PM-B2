class Employee {
   public firstName:string;
    lastName:string;
    private city:string

    constructor(fn:string,ln:string,city:string){
 this.firstName = fn ;
 this.lastName = ln;
 this.city = city
    }

   public displayFullName() : string{
     return this.firstName + " " + this.lastName
    }

    private changeCity(newCity:string){
   this.city = newCity
    }
}

 var emp1 = new Employee("Raj","Verma","Delhi")

 emp1.displayFullName() 
 console.log(emp1.firstName)
 
 //InValid 
//  console.log(emp1.city)
//  emp1.changeCity("pune")

 var emp2 = new Employee("Sneha","Sharma","Mumbai")