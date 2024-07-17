var Product = /** @class */ (function () {
    function Product(name, price, review) {
        this.pName = "101";
        this.pPrice = 12345;
        this.pReview = [""];
        this.pName = name;
        this.pPrice = price;
        this.pReview = review;
    }
    Product.prototype.getOnlyProductName = function () {
    };
    return Product;
}());
var p1 = new Product("Iphone 15", 150000, ["", ""]);
var p2 = new Product("Samsung ulta", 125000, ["", "", ""]);
console.log(p1);
console.log(p2);
