class A {
  public  fullName :string ;
  private  atmpin:number

    changePin(){
 this.atmpin = 78987
 this.printName()
    }

    private printName(){
 console.log(this.printName,this.atmpin)
    }
}

var a1 = new A() 
a1.fullName
a1.changePin()
// a1.printName()
