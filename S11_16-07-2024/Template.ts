
class Product{

     pName:string 
     pPrice:number
     pReview:Array<string>

   

       constructor(name,price,review){
        this.pName = name
        this.pPrice = price
        this.pReview = review
       }

     getOnlyProductName(){

     }


}

    var p1 = new Product("Iphone 15",150000,["",""])
    var p2 = new Product("Samsung ulta",125000,["","",""])

    console.log(p1)
    console.log(p2)