class Product {
   pName;
   price;

   constructor(){
    this.pName = "Apple"
    this.price = 80000
   }
   display(){
    console.log("Parent")
    console.log(this.pName,this.price)
    
   }
}

class Iphone extends Product {
   modelName;
   qty;
   totalAmount;
   constructor(){
     super() 
     this.modelName = "Iphone 14"
     this.qty = 5 ;
     this.totalAmount = 0
   }
   display(){
    
 console.log("Child")
     this.totalAmount = this.price * this.qty
     console.log(this.modelName)
     console.log(this.totalAmount)
   }

      print(){
        super.display() 
        this.display()
      }
}

  var iphone14 = new Iphone() 
  var p1 = new Product()

//   iphone14.print()
  p1.display()
  