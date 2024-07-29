interface I1 {
    name:string;
    city:string;
    display();
}
interface I0 {
    email:string
}

interface I2 extends I1,I0 {

    gender:string;
    isMarried:boolean;
}

var obj1:I2 = {
    name:"s1",
    city:"c1",
    gender:"male",
    email:"s1@gmail.com",
    isMarried:true,
    display:()=>{
        console.log("display is called")
    }
   
}