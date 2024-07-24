abstract class Emp {
    empName;
    city 

   abstract display()

   changeCity(newCity:string){
    this.city = newCity
   }

 
    }

    class Child extends Emp{
        city:string;
         display() {
             console.log("Implemented")
this.city = ""
         }
    }

    class User extends Emp {
        display() {
            //logic
        }
    }

