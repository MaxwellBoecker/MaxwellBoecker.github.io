/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var,  followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* USING LET AND CONST
*
* 0. Using let also allows us to declare variables. The declaration process works in much the same way as var although with the 
* difference that let variables cannot be re-declared, only updated.
* 
* 1. const declares a variable, only it is not actually variable. By declaring with const
* we are saying that the variable will maintain a constant value. 

* 2. The difference between let, const and var is that let and const
* are block-scoped which means that they only exist inside the block of code that they are declared
* whereas var declared inside of a code block will be globally accessable
*/

//1. Declaration

let myArray;//created a variable called myArray

console.log(myArray);//gives us undefined

//2. Initialization
/*let cannot be re-declared, so we start with the variable name*/

myArray = [1, 2, 3];//assigning value to myArray

console.log(myArray);//prints [1,2,3] to the console

const myObject = {key1: 'one'};/*variables declared with const must also be 
initialized immediately*/

//3. Re-Assignment
/*only let can be reassigned*/
myArray = [4, 5, 6];

console.log(myArray);//should return [4, 5, 6]

/* trying to re-assign a const would return a Type error*/

/*
* HOISTING:
*
* 0. Hoisting is the process by which the JavaScript interpreter brings variable 
* and function declarations to the top of their scope before running the code.
* There they are added to the memory in a data structure called a Lexical 
* Enviornment. This helps to prevent errors that would occur due to calling a  
* function or referencing a variable before it has been declared
*
* 1. Variables declared with var, let and const are hoisted as well as functions.
* For variables declared with var only the name is hoisted. 
*
* 2. For variables declared with let and const the variables do get hoisted but 
* are not accessable before they appear in the actual code and will return an 
* error if referenced somehow beforehand. This is called the Temporal Dead Zone
*
* 3. For functions not only the name of the function gets hoisted but the body
* does as well. This means we can call a function in code above where it is 
* declared and initialized in the code. The entire function is stored in the 
* lexical enviornment
*/ 

// 1. Hoisting var variables

console.log(sesameStreet);

var sesameStreet = 17;/* running these two lines of code will return 'undefined'
* This is because the name of the var sesameStreet got hoisted, so exists even 
* before it is declared in the code. However it has no value until it has been 
* initialized
*/

// 2. Hoisting let and const variables

/* console.log(dolphin);
*
* let dolphin = []; 
*
* Running this code throws a reference error. In fact, 
* dolphin has been hoisted. However it exists in what is called a 
* Temporary Dead Zone until the interpreter actually reaches the line
* where the variable is declared. Thus, the code will behave as is it
* has not been declared
*/

 /* console.log(elephant);
*
* const elephant = 'grey';
*
* in the same way as above with the let variable dolphin the const 
* variable elephant exists in a temporal dead zone until the interpreter 
* reaches its initialization in the code. A ReferenceError is thrown here.
*/

// 3. Hoisting Functions

multiply(3, 5);

function multiply(num1, num2){
    return (num1 * num2);
}

/* When run this code does not throw an error because the function has been 
* hoisted and exists in the lexical enviornment. However it does not run the 
* function as specified, and I have received no result here from running it
* this way.
*/




























