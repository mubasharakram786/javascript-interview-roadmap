// Function Declaration
function sayHello(){

}

// Function Expression

const greeting = function(){
    console.log("Hello JavaScript!")
}

// Arrow Function
const templates = ()=> console.log("Email Template")

// Function Parameter vs Argument

function sum(a,b) { // here a and b is parameter
    return a + b
}

sum(10,15) // Here 10 and 15 is Argument

// Default Parameter

function sum1(a=20,b=30){ // here value in a and b is default parameter in case you invoke function without argument default value will apply 
    return a + b
}

sum1()

// Rest Parameter

function sumOfSequence(a,b,c,...args){

}

sumOfSequence(1,3,5,7,9,11,13,15,17,19) // 1st 3 values accepted in the sumofSequence directly others will form into an array because of rest(...) operator

// Spread Operator

let arr = [2,4,6,8,10]

let newArr = [...arr]

newArr.push(10);

console.log(arr,"===========Original Array==========")
console.log(newArr,"===========New Array==========")

// CallBack Function

// when function pass an argument into another function and it will call after main function execution.

// Synchronous Callback - Runs immediately after main function executed 

// Asynchronous Callback - Doesn't run immediately mostly use in API requests

function greet(name, callback) {
    callback();
    console.log("Hello " + name);
}

function sayBye() {
    console.log("Good Bye!");
}

greet("Ali", sayBye);
console.log("end")


function calculate(a,b,callback){
    let result = a + b
    callback(result)
}

function showResult(res){
    console.log("Result is ", res)
}

console.log("Start")
setTimeout(()=>{
    calculate(10,20, showResult)
},1000)
console.log("End")


// Higher-order functions

// Pass function as an argument into another function
// Return a function from a function

function outer(){
    let num=5;

    function inner(){
        return num * num
    }
    return inner
}
let square = outer()
console.log(square(),"=======Square of the number======")

// pure function

// same input with same output nothing change
function sum(a,b){
    return a + b
}

// Impure Function

let count = 0

function counter(){ 
    count++;  // Causing side effect - changing outside state
    return count
}

// Function as first-class function mean treated like values - pass/store and return.

// Function are first class citizen of javaScript as it is treated like variables/values it can pass/store and return it. 
