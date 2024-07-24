var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product() {
        this.pName = "Apple";
        this.price = 80000;
    }
    Product.prototype.display = function () {
        console.log("Parent");
        console.log(this.pName, this.price);
    };
    return Product;
}());
var Iphone = /** @class */ (function (_super) {
    __extends(Iphone, _super);
    function Iphone() {
        var _this = _super.call(this) || this;
        _this.modelName = "Iphone 14";
        _this.qty = 5;
        _this.totalAmount = 0;
        return _this;
    }
    Iphone.prototype.display = function () {
        console.log("Child");
        this.totalAmount = this.price * this.qty;
        console.log(this.modelName);
        console.log(this.totalAmount);
    };
    Iphone.prototype.print = function () {
        _super.prototype.display.call(this);
        this.display();
    };
    return Iphone;
}(Product));
var iphone14 = new Iphone();
var p1 = new Product();
//   iphone14.print()
p1.display();
