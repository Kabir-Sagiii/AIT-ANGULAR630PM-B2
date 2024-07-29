var obj = {
    name:"s1",
    city:"c1",
    email:"e1@gmail.com"
}

var arr = [10,20,30,40]
console.log(arr[1])

var {city,email} = obj

var [, ,c] = arr;

console.log(c)
 
// city = "hyd"

console.log(city)
console.log(email)
console.log(obj)