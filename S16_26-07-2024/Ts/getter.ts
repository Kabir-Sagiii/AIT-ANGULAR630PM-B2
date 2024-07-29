class User {
    //public
      name:string 
    private _age:number | null 
    
     get age(){
        if(this._age === null){
            throw new Error("Invalid Age")
        }
        return this._age
     }

     set age(newAge){
         if(newAge < 0){
            throw new Error("Age cannot be negative")
         }
     this._age = newAge
     }

     constructor(name,age){
        this.name = name ;
        this._age = age
     }

        }

        let user1 = new User("Raj",34)

        console.log(user1.name)
        //user1.age() : invalid

        console.log(user1.age)

        user1.name = "Rohan"
       
        // user1.age(32)  Invalid
        user1.age = 32

        console.log(user1.name)
        console.log(user1.age)
       