interface IUsers {
    uname:string;
    display():void
    createUser():string
}

class User1 implements IUsers  {
uname = "Raj Verma"
    display(): void {
        console.log("display is called")
    }

    createUser(): string {
        return this.uname
    }
       
}

var user1 = new User1()
console.log(user1.createUser() )
user1.display()
user1.uname = "Sneha"
console.log(user1.createUser() )
