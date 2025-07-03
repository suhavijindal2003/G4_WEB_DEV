// console.log("Script Start!!");
// setTimeout(() => {
//     console.log("I AM GOING TO RESTAURANT");
// }, 4000);
// setTimeout(() => {
//     console.log("I AM CHEACKIMG THE MENU FOR ORDERING");
// }, 3000);

// function getReady(cb) {
//   console.log("I AM GETTING READY");
//     setTimeout(cb,3000);

// }
// function checkMenu(cb) {
//   console.log("I AM CHECKING THE MENU FOR ORDERING");
//   setTimeout(cb,2000);
// }
// function orderFood(cb) {
//   console.log("I AM GOING TO ORDER FOOD");
//   setTimeout(cb,3000);
// }

// function eatFood(cb) {
//   console.log("I AM EATING FOOD");
//   setTimeout(cb,8000);
// }
// function payBill(cb) {
//   console.log("I AM PAYING THE BILL");
//   setTimeout(cb,3000);
// }
// function goHome(cb) {
//   console.log("I AM GOING HOME");
  
// }

// getReady(() => {
//   checkMenu(() => { 
//     orderFood(() => {
//       eatFood(() => {
//         payBill(() => {
//           goHome(() => {
//             console.log("I AM HOME");
//           });
//         });
//       });
//     });
//   });
// });

// console.log("Script End!!");



//ARRAY OPERATIONS
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//create a new array with each element doubled withput map 
// let doubledArr = arr.map((num) => {
//     return num * 2;
// });
function doubleArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
const o=doubleArray(arr);
console.log(o);


//prototype method to double each element in the array
Array.prototype.double = function(data) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(this[i] * 2);
    }
    return newArr;
}
const doubledArr = arr.double();
console.log(doubledArr);

function triple(x){
    return x*x*x;
}
const  output=arr.double(triple);
console.log(output);




