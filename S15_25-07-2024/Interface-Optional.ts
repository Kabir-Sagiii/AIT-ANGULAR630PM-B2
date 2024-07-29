interface IOptional {
    readonly username:string;
    gender:string;
    city?:string;
}

var obj1 : IOptional = {
    username:"Raj",
    gender:"male"
}
var obj2:IOptional ={
    username:"Sneha",
    gender:"female",
    city:"Hyd"
}

obj1.username = "Rohan"
// obj1.state = "MH"
obj1["state"] = "TS" //? Why ? How to restrict ?
console.log(obj1.username)