/* FUNCTIONS
*
* 0. A function is a program composed of statements that are executed upon function call. Functions can take arguments
* where parameters have been specified and perform operations on these with the contained statements. Parameters are the variables declared in the function declaration
* which specify how many arguments can be taken by the function. Arguments are the actual data passed in to the function at function call. 
* Functions may optionally feature a return statement which returns a certain value from the execution of the function. After the return statement 
* is hit, the function ceases to operate. Let's take a look at the essential syntax of a function.
*/

// 1. Function Syntax and Composition for a Non Anonymous Function
/* The function is composed of the keyword function, name of function, paranthetical statement containing the parameter or parameters(these specify the
* number of arguments the function will take) separated by a comma, code block of statements bounded by curly brackets possibly featuring the return 
* statement. The inputs are specified by the parameters, the output is specified by the return statement.
*/


function divide(num1, num2){
    return num1 / num2;
}

// 2. Function Call

// We use a function by calling its name and providing it with the necessary arguments to operate

divide(6, 5);

console.log(divide(6, 3));//prints 2 to the console


// 3. Scope and Functions

/* This section will enumerate the various intersections of variables and functions insofar as they relate to scope.
*
* Understanding scope helps to understand how pieces of our code interact with one another. It helps to keep variables from accidentally being
* reassigned and makes our code more flexible and reusable. We can use the same variable name many times in different local scopes without having them conflict
* with one another. Redeclaring the same variable name in the same scope can lead to unexpected errors.
* Variables declared with the var keyword can have one of two scopes, global scope or function scope. If the variable is declared within
* the function, then it will only exist within the function. Trying to access the variable outside of the function code block will return an error. 
* However, if the function has been declared outside the function then it will have global scope, and will exist inside the function as well as outside of it.
*/

var food = 'carrots'//global scope food

function eat(food1){
    console.log('I ate ' + food1);
}

eat(food);// this logs 'I ate carrots' to the console. The global variable food is defined within the function.

function wash(item1){
    var washed = 'dishes'
}

//washed += 'all the time'---trying to add the string 'all the time' to the variable washed returns an error because wash is not defined outside the function


/* Variables declared with the let or const keywords can be globally scoped or block scoped. When Block scoped, they will not exist outside of the block of code they are 
* written inside of.
*/

let x = 'Moscow'//global scope x

const y = 'Tokyo'// global scope y


function travel(place1){
    console.log('I went to ' + place1);
}

travel(x);//prints 'I went to Moscow'

travel(y)// prints I went to Tokyo

for(let i = 0; i <= 5; i++){
    console.log(i);         //i defined by let within the block scope
} 
//console.log(i) // trying to console.log the variable i here will succumb to an error seeing as i is not a defined variable outside the block scope.


// 4. Closures

/* A closure is a returned function within a function that retains access to the lexical enviornment of the outer function. What does this mean? When code is run,
* an abstract enviornment called an execution context is created. This execution context contains a lexical enviornment in which is stored all the information about variables
* and their values within the given execution context. However, the lexical enviornment not only stores information about variables in its own execution context, but
* also stores a reference to the lexical enviornment of the outer execution context. Let's take a look at this phenomenon.
*
*/

/* I borrowed this code idea from an atricle i read on understanding closures by Sukhjinder Arora which I thought was very thorough and concise. I was having an 
* incredibly hard time coming up with my own code idea for this concept. The article can be found here:
* https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda
*/

function outer(){
    let fscope1 = 1// defining a variable within function scope
    
    return function (){      //returning a function
        
        return fscope1 --         //which returns the variable in outer function scope decremented by 1
    }
}
let gscope1 = outer()


/* In the above code the lexical enviornment of the function outer stores a reference to the global lexical enviornment. The lexical enviornment of the anonymous
* function which is returned inside of the outer function stores references to the lexical enviornment of its outer function and a reference to the global lexical enviornment.
* It performs an operation on the variable fscope1 which is stored inside of the function, a variable that is not defined in the global scope.
*/

console.log(gscope1()); //returns 1
console.log(gscope1()); //returns 0

/* Instead of returning the original value 1 for the variable fscope1, the value is being modified with each call of the function. The reason for this
* is that when a lexical enviornment is referenced by a function elsewhere in the code, then it is stored in memory. Since the lexical enviornment of the 
* outer function 'outer' is referenced by the inner anonymous function, the value of the variable fscope1 is stored somewhere in the memory. Thus each time we call 
* the function the value is modified
*
* This is significant because when a new execution context and lexical enviornment are created prior to the running of a function the lexical enviornment is not stored in memory. JavaScript 
* will however store the lexical enviornment of a function that is referenced elsewhere in the code, thus effectively keeping its variables alive.
*/
























