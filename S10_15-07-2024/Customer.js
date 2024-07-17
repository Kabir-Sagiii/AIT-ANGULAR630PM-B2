var CustomerDetails = /** @class */ (function () {
    function CustomerDetails() {
        this.id = 101;
        this.gender = "male";
        this.name = "Aditya Jaiswal";
    }
    CustomerDetails.prototype.display = function () {
        console.log(this.id, this.gender, this.name);
    };
    CustomerDetails.prototype.printFullName = function (id) {
        //------------------
        return "FullName";
    };
    return CustomerDetails;
}());
var cust1 = new CustomerDetails(); // constructor
var cust2 = new CustomerDetails();
var cust3 = new CustomerDetails();
console.log(cust1);
console.log(cust2);
console.log(cust3);
cust1.display();
cust2.id = 102;
cust2.name = "Sneha Reddy";
cust2.gender = "female";
cust2.display();
console.log(cust2);
console.log(cust1);
console.log(cust3);
