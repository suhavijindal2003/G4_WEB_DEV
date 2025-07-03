// console.log("hello world");
// var a = 123;
// console.log(a);
// function abc(){
//     console.log("abc function called");
//     function def() {
//         console.log("def function called");
//     }
//     def();
// }


// xyz();
// var xyz=() => {
//     console.log("xyz function called");
// }   

// var b = 456;
// console.log(b);



// {
    //compound statement
//grandparent
//     let a=100;
//     let b=200;
//     let c=300;
//     // console.log(d);
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     {
//         //block statement
//         //parent
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         {
//             //child
//             let d=400;
//             console.log(a);
//             console.log(b);
//             console.log(c);
          
//         }
//     }
// }

// function abc(){
//     var a=100;
//     var b=200;
//     var c=300;
      
//     function def() {
//         var d=400;
//         console.log(e);
//         console.log(a);
//         function ghi() {
//             let e=500;
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);
//         }
//         ghi();
//     }
//     def();
// }
// abc();



// for (var i = 0; i <=5; i++) {
//     setTimeout(() => { 
//         var a=i; 
//         console.log(a);
//     }, 2000);
   
   
// }
// for (var i = 0; i <=5; i++) {
//     function clouse(i){
//         setTimeout(() => { 
          
//             console.log(i);
//         }, 2000);
//     }
//     clouse(i);
   
   
// }







//HOF
function abc(cb) {
    console.log("abc function called");
    cb();
}
function cb() {
    console.log("cb function called");  
}
abc(cb);


//return function
function abc() {
    console.log("abc function ");
    return function cb() {
        console.log("cb function called");  
    }
}