//Promise is a Object where we can store the data

//How to create Promise
var promise = new Promise(function (resolve, reject) {
  //   resolve({
  //     ok: true,
  //     data: [{ city: "Hyd" }, { city: "Delhi" }],
  //   });

  reject({
    ok: false,
    error: "Something went wrong",
  });
});

// console.log(promise);
//Handle or access the data from Promise

promise
  .then((success) => {
    console.log("then");
    console.log(success);
  })
  .catch((error) => {
    console.log("catch");
    console.log(error);
  });

//Async Await
