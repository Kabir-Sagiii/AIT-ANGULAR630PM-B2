class Order{
    orderId:number;
    productNames:Array<string>;
    date:string;
    address:{
        city:string,
        hno:string,
        pincode:number
    }
   static cName:string;
    static mode:string

    static changCName(){
        this.cName = "---------"
    }

   static changeMode(newMode){
Order.mode = newMode
this.mode = "online"
this.changCName()
//  this.displayAllDetials()
//  this.productNames = []

    }

     displayAllDetails(){
        console.log(Order.mode,this.productNames)
        Order.changCName()
        
        // console.log(this.mode) Invalid
     }

}

var o1 = new Order()

o1.displayAllDetails() 
Order.changeMode("")
Order.cName