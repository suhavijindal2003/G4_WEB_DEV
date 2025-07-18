// // console.log("L5_Event script loaded");




// // //event bubbling and event capturing
// // const child = document.getElementById("child");
// // const parent = document.getElementById("parent");
// // const grandparent = document.getElementById("grandparent");

// // // grandparent.addEventListener("click", function() {
// // //     console.log("Grandparent clicked");
// // // },); 
// // // parent.addEventListener("click", function() {
// // //     console.log("Parent clicked");
// // // },); 
// // // child.addEventListener("click", function() {
// // //     console.log("Child clicked");    
// // // },); 


// // //now i want event capturing
// // // grandparent.addEventListener("click", function() {
// // //     console.log("Grandparent clicked");
// // // }, true);
// // // parent.addEventListener("click", function() {
// // //     console.log("Parent clicked");
// // // }, true);
// // // child.addEventListener("click", function() {
// // //     console.log("Child clicked");
// // // }, true); 



// // grandparent.addEventListener("click", function(e) {
// //     console.log("Grandparent clicked");
// //     e.stopPropagation(); 

// // },);
// // parent.addEventListener("click", function(e) {
// //     console.log("Parent clicked");
// //     e.stopPropagation(); 
// // },);
// // child.addEventListener("click", function(e) {
// //     console.log("Child clicked");
// //     e.stopPropagation(); 
// // }, ) ; 


// // //event delegration
// // // we will add event listener to parent and grandparent and then we will click on child
// // const productlist = document.getElementById("productList");
// // productlist.addEventListener("click", function(e) {
// //     if (e.target.tagName === "LI") {
// //         console.log("Product clicked: " + e.target.textContent);
// //     }
// // },); 


// // const productlist2 = document.getElementById("productList2");
// // productlist2.textContent = "Bottle";
// // productList.appendChild(productlist2);












// //task 1:  add event listener to the button and change the text of the button to "Clicked" when it is clicked
// const textbox = document.getElementById("textbox");
// let thistime;

// textbox.addEventListener("input", function(event) {
//     clearTimeout(thistime);
//     thistime = setTimeout(() => {
//         console.log("Typed:", event.target.value);
//     }, 3000);
// });


// (function() {
//     const textbox = document.getElementById("textbox");
//     let thistime;

//     textbox.addEventListener("input", function(event) {
//         clearTimeout(thistime);
//         thistime = setTimeout(() => {
//             console.log("Typed:", event.target.value);
//         }, 3000);
//     });
// })();

console.log("Script loaded");
Promise.resolve("resolved").then(console.log("Promise resolved"));
console.log("Script mid");
process.nextTick(() => {
    console.log("Promise next tick");
});
console.log("Script end");

