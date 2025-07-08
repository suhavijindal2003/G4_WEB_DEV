function welcomestudent(welcomeMessage, goodbyeMessage) {
    // console.log(welcomeMessage+" "+this.studentname+" is a student of class "+this.studentname+goodbyeMessage);
    return `${welcomeMessage} ${this.studentname} is a student of class ${this.studentclass}. ${goodbyeMessage}`;
 
}
const student1 = {
    studentname: "John",
    studentclass: "10th",
};
const student2 = {
    studentname: "Jane",
    studentclass: "12th",
 
};
const student3 = {
    studentname: "Doe",
    studentclass: "11th",
    
};
//call
welcomestudent.call(student1, "Hello", "Goodbye");
welcomestudent.call(student2, "Hi", "See you later");
welcomestudent.call(student3, "Greetings", "Take care");

//bind
const student1Welcome = welcomestudent.bind(student1, "Hello", "Goodbye");
const student2Welcome = welcomestudent.bind(student2, "Hi", "See you later");   
console.log(student1Welcome());
console.log(student2Welcome());   

//apply
welcomestudent.apply(student1, ["Hello", "Goodbye"]);
welcomestudent.apply(student2, ["Hi", "See you later"]);

//currying
// that we can not passing the arguments in the function
function sumofthree(a,b,c){
    return a + b + c;
}
console.log(sumofthree(1,2,3)); 
// currying function
function currySum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(currySum(1)(2)(3)); // 6

//SUBWAY CURRYING FUNCTION
function subwayOrder(bread) {
    return function(patty) {
        return function(cheese) {
            return `Your order: ${bread} bread with ${patty} and ${cheese}.`;
        }
    }
}
console.log(subwayOrder("Wheat")("Allou patty")("chesse")); // Your order: Wheat bread with Chicken and Cheddar.


//event bubbling and event capturing
// const child = document.getElementById("child");
// const parent = document.getElementById("parent");
// const grandparent = document.getElementById("grandparent");

// grandparent.addEventListener("click", function() {
//     console.log("Grandparent clicked");
// },); 
// parent.addEventListener("click", function() {
//     console.log("Parent clicked");
// },); 
// child.addEventListener("click", function() {
//     console.log("Child clicked");    
// },); 


//now i want event capturing
// grandparent.addEventListener("click", function() {
//     console.log("Grandparent clicked");
// }, true);
// parent.addEventListener("click", function() {
//     console.log("Parent clicked");
// }, true);
// child.addEventListener("click", function() {
//     console.log("Child clicked");
// }, true); 


//fetch data from products arrayof objects contain produxtname,s]description,prine
const products = [
    { productName: "Laptop", description: "High performance laptop", price: 1000 },
    { productName: "Smartphone", description: "Latest model smartphone", price: 800 },
    { productName: "Tablet", description: "Portable tablet device", price: 600 },
];


function fetchProducts() {
    products.forEach(product => {
        console.log(`Product Name: ${product.productName}`);
        console.log(`Description: ${product.description}`);
        console.log(`Price: $${product.price}`);
       
    });
}
console.log("Fetching products...");
fetchProducts();
//make code to fetch data with .fetch() method

fetch('/api/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    console.log("Fetched products:", data);
    // You can now use data to render products on the page
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });


