let num1 = 10;

let num2 = 20


function sum(a,b){
    return a + b
}

function doubleSum(a,b){
    return sum(a,b) * 2
}


let sum1 = sum(num1,num2)

let sum2 = doubleSum(30,40)


console.log(sum1,"================Sum 1============")
console.log(sum2,"=================Sum 2================")



// This is a small example of understanding Execution Context.
// There are 2 types of execution context - Global Execution Context which will create initially when your program start to run.
// Other type is function execution context which will create on each call of a function
// Two phase in the execution context 

// Creation Phase
// Execution Phase

// Creation Phase - Memory is alloted to all global variables and functions.

// In case of variable with var keyword undefined placeholder use in each variable and in case of let value unavailable.
// In case of normal function all function body store in the function 

// Execution Phase

// Variables are get initialized with provided value like in the above num1 and num2 
// And all execution statement will run in this phase like invoking function and logs statements.


// Call Stack 

// This work like DS stack - in the most beneath layer  Global Execution context placed and after each call of function it will get on top the bottom layer.

// e.g call stack > Global Execution Context (anonymous) > sum()
// e.g call stack > Global Execution Context (anonymous) > doubleSum() > sum()

// When function is called FEC created and on finish the job it will get pop out from call stack

// It still busy until all functions never get their job done.

// Executing all function in the last anonymous (GEC) also pop out