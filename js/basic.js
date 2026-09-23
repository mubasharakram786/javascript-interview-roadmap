// Var - Global Scope
// let - const - Block Scope

var name="Mubashar"; // Store in Global Scope like in window object

let fname ="Mubashar" // Store in Script Scope

const lname= "Akram" // Also store in Script Scope


// Primitive are built-in data types which store values
// non-primitive/reference data-type store reference or memory address to get values 


// Type Coercion 
// implicit coercion
let num = "5" + 3
console.log(typeof num) // 3 converted to string and output will be "53"

// Explicit coercion

let number = String(36)

console.log(typeof number) // this will give string in log

num = 5

let str = "5"

console.log(num == str) // this cause type coercion and only match value
console.log(num === str) // this match both value and data-type

// Another example of loose and strictly equality

console.log(null == undefined)
console.log(null === undefined)



// Scope
// Global | Block | Function | Lexical Scope

var greeting = "Hello JavaScript" // Global Scope

{
    let tech = "MERN Stack" // Block Scope
}

function iteration(){ // Function Scope
    var i;
    for(i=0;i<5;i++){
        console.log(i,"====================")
    }
    console.log(i,"==========After Loop Break==============")
}

iteration()

// Lexical Scope

function A(){ // Function A lexical scope is Global Scope
    let a=10;
    function B(){ // Function B lexical scope is Function A
        let b=20;
        C()
        function C(){ // Function C lexical scope is Function B
            let c = 30;
            let sum = a + b +c
            console.log(sum,"=======================")
        }
    }
    B()
}

A();

// Hoisting 

console.log(phone) // If we log variable before the declaration and initialization it will return undefined called Hoisting it happened only when using var keyword.



var phone = "Redmi Note 13 pro"


// TDZ - Temporal Dead Zone

console.log(os) // It will throw an error in the console as os cannot access before initialization 


let os ="android"
