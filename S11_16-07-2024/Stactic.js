var Users = /** @class */ (function () {
    function Users() {
        this.id = 101;
        this.uname = "abc";
        Users.city = "hyd";
    }
    Users.prototype.printAllDetails = function () {
        console.log(this.id, this.uname, Users.city);
    };
    return Users;
}());
var user1 = new Users();
var user2 = new Users();
var user3 = new Users();
//   console.log(user1)
//   console.log(user2)
//   console.log(user3)
user1.printAllDetails();
user2.printAllDetails();
user3.printAllDetails();
Users.city = "Pune";
user1.printAllDetails();
user2.printAllDetails();
user3.printAllDetails();
