var User1 = /** @class */ (function () {
    function User1() {
        this.uname = "Raj Verma";
    }
    User1.prototype.display = function () {
        console.log("display is called");
    };
    User1.prototype.createUser = function () {
        return this.uname;
    };
    return User1;
}());
var user1 = new User1();
console.log(user1.createUser());
user1.display();
user1.uname = "Sneha";
console.log(user1.createUser());
