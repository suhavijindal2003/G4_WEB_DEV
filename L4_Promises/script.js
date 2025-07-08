// //promise is an object : how to make a promise

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("This is a promise object");
        resolve("Promise resolved successfully");
    }, 3000);
});

// promise1
// .then((res)=> console.log(res))
// .then(() => setTimeout(() => {
//     console.log("P2");
  
// }   
// , 2000))
// .then(() => setTimeout(() => {
//     console.log("P3");
  
// }   
// , 5000))

// .then(() => setTimeout(() => {
//     console.log("P4");
  
// }   
// , 1000))


// .catch((err) => console.error("Error:",err));


function something(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("resolve",message);
            resolve("resolve p1", message);
        }, delay);
    });
}
promise1.then((res) => {
   
    return something("P2", 2000);
}).then((res) => {
    console.log(res);
    return something("P3", 5000);
}).then((res) => {

    return something("P4", 1000);
}).then((res) => {
    
    return something("P5", 3000);
}).catch((err) => {
    console.error("Error:", err);
}   );
