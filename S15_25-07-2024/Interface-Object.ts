//contract
interface IObjContract {
      productName:string;
      price:number ;
      rating:number;
      inStock:boolean
}

var obj1 : IObjContract = {
    productName:"Iphone 15",
    price:90000,
    rating:4.5,
    inStock:true,
    
   
}



var obj2 : IObjContract={
    productName:"Iphone 16",
    price:120000,
    rating:4.7,
    inStock:false,
}

obj1['brandName'] = 'Apple'

console.log(obj1)