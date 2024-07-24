
import Deparetment from "./Department";


class Employee extends Deparetment {
    firstName:string;
    lastName:string;
    city:string;
    type:boolean

    displayFullName(){
        return this.firstName + " " + this.lastName
    }

    changeType(newType:boolean){
        this.type = newType
    }

    updateCity(newCity){
this.city = newCity
    }

}