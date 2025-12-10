// Temporal Dead Zone - cant access functions of variables before initialization.
// Hoiting - shift all the variables and functions at the top for it to be accessible.

// IIFE --> Imediately Involked Function Execution
// (function(){
//     console.log("I will run first as I am an IIFE");
// })()
// console.log("Hello world from JS"); // print first
// setTimeout(() => {
//     console.log("Hello from setTimeOut"); // print third because setTimeOut is of asyncronous nature.
// }, 0); // time is in miliseconds. 1s = 1000ms
// setInterval(()=>{ // print last because setInterval is of asyncronous nature.
//     console.log(("I am from setInterval"));
    
// }, 1000)
// console.log("Ending console"); // print second

// Callback function is a function than can be accessed with another function. It is a function within function.

// function display(uname) {
//     console.log("Your Name is:", uname);
// }

// function func1(){
//     display("Peter");
// }
// func1();
// function display(num){
//     console.log("The value is:", num);
    
// }

// function add(num1, num2, callBackfntn){
//     const sum = num1 + num2;
//     callBackfntn(sum);
// }

// add(4, 3, display);

// Promise: promises are objects that promise to return us something. It is an object that promise the execution of a code.

// const promise1 = new Promise((resolve, reject) => {
//     const val = Math.random();
//     if (val<0.5) {
//         reject(`The number is ${val} which is lesser than 0.5`);
//     }
//     else{
//         resolve(`The number is ${val} which is greater than 0.5`);

//     }
    
// })
// const promise2 = new Promise((res, rej)=>{
    
//     setTimeout(()=>{
//         console.log("SetTimeOut is involked.");
//         res("This function has been rsolved.");    
//     }, 2000);
// })


// promise1.then((message)=>{
//     console.log(message);
// }).catch((err)=>{
//     alert("The battery is lesser so the computer will be restarting");
// })

// Tpyes of status in promise: 1. pending, 2. resolved/fulfilled, 3. rejected

// 6 types of methods in Promise class

// Promise.all() - waits for all promises to be fulfilled and only then returns the value.

// let promise3 = Promise.all([promise1, promise2]);
// promise3.then((data)=>{
//     console.log("The data is: ",data);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.allSettled() - waits for the promises to settle and then returns their values in an array.
// let promise3 = Promise.allSettled([promise1, promise2]);
// promise3.then((data) => {
//     console.log("The data is: ",data);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.race() - waits for the first promise to be fullfiled/rejected and then returns its value.
// let promise3 = Promise.race([promise1, promise2]);
// promise3.then((data) => {
//     console.log("The data is: ",data);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.any - waits for the first promise to be fullfiled and then returns its value.

// let promise3 = Promise.any([promise1, promise2]);
// promise3.then((data) => {
//     console.log("The data is: ",data);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.resolve() - static method for resolve that will return a value
// let promise3 = Promise.resolve("This has been resolved");
// promise3.then((data) => {
//     console.log("The data is: ",data);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.reject() - static method for reject that will return a value
// let promise3 = Promise.reject("This has been rejected");
// promise3.then((data) => {
//     console.log("The data is: ",data);
// }).catch((err)=>{
//     console.log(err);
// });


// Async-Await
// console.log("Data will be loaded now");
// async function loadData(){
//     const rawData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await rawData.json();
//     return data;

// }

// async function main(){
//     let data = await loadData()
//     console.log(data);
// }

// main();

// localStorage.setItem("movie", "Marvel's Avengers");
// localStorage.setItem("hero", "Robert Downey Jr.");
// let movie = localStorage.getItem("movie");// set an item in localStorage.
// let hero = localStorage.getItem("hero"); // fetch an item from localStorage
// localStorage.removeItem('movie'); // remove your items in your localStorage
// localStorage.clear(); // clear your localStorage
// console.log("The movie is: ",movie);
// console.log("The Hero is is: ",hero);






