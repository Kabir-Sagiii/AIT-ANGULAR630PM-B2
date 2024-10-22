"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var sub = new rxjs_1.Subject();
var obs = new rxjs_1.Observable(function (observer) {
    observer.next(Math.random());
});
obs.subscribe(function (data) {
    console.log(data);
});
obs.subscribe(function (data) {
    console.log(data);
});
obs.subscribe(function (data) {
    console.log(data);
});
console.log("============================================");
sub.subscribe(function (data) {
    console.log(data);
});
sub.subscribe(function (data) {
    console.log(data);
});
sub.subscribe(function (data) {
    console.log(data);
});
sub.next(Math.random());
