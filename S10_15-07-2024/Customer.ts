class CustomerDetails {

    id : number = 101 ;
    gender : string = "male";
    name:string = "Aditya Jaiswal"

     
     

    display(){ // Methods
        console.log(this.id,this.gender,this.name)
    }

    printFullName(id){ // Methods
        //------------------
        return "FullName"
    }

}

  var cust1   =  new CustomerDetails() ; // constructor
  var cust2   =  new CustomerDetails() ;
  var cust3   =  new CustomerDetails() ;

  console.log(cust1)
  
  console.log(cust2)
  console.log(cust3)

  cust1.display()
  cust2.id = 102 
  cust2.name = "Sneha Reddy"
  cust2.gender = "female"
  cust2.display()
  console.log(cust2)
  console.log(cust1)

  console.log(cust3)

  