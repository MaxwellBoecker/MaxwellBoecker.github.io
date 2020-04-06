/*  OPERATORS
* 
* 0. JavaScript operators perform operations on data in JavaScript.
* There are many types of operators which perform many types of operations.
* Here, we will talk about six different types of operator in JavaScript, how they look and 
* how they work. The list includes Assignment operators, Arithmetic operators, Comparison operators, 
* Logical Operators, Unary Operators and Ternary Operators
*
*/ 
// 1. Operator types

// Assignment Operators
/* The assignment operators assign a value found on the right side of the operator to a 
* variable on the left side of the operator 
*/
var num = 7;// The assignment operator = assigns 7 to num

num += 8;// The assignment operator += not only adds 8 to the value in num, but also assigns it to num
// the same will hold for any arithmetic operator combined with the assignment operator e.g. -=, /=, *=, %=

console.log(num);// logs 15 to the console

// Arithmetic Operators
/* 
* The arithmetic operators take numerical data values as operands and return a new value. There are four fundamental 
* arithmetic operators, add(+), subtract(-), multiply(*), divide(/). Also useful is the remainder operator % which returns the remainder
* of dividing two numbers
*/

console.log(3 + 5);//using the addition operator returns 8 here

console.log(4 % 2);// since the remainder of dividing 4 by 2 is zero, we should see zero here

// Comparison Operators
/* 
* The comparison operators compare given values and return a Boolean result. The comparison operators of note which may 
* already be familiar to us are greaterThan >, lessThan <, === strict equality, == loose equality, !== strict inequality, != loose inequality
* >= greater than or equal to, <= less than or equal to. JavaScript will perform a type conversion to try and run a comparison on 
* different types of data for every type of comparison except the strict equality and inequality operators.
*
*/

console.log(7 > 5);// returns true

console.log(1 == '1');// will return true even though 1 and '1' are of different types. JavaScript has performed a type conversion

console.log(1 === '1');//This will log false. With strict comparison no type conversion is used, a number cannot strictly equal a string

// Logical Operators
/*
* The logical operators take arguments of Boolean Type. If the argument is not of Boolean type then the interpreter performs a 
* conversion on the value to try to make it a boolean value. For example the number 1 will convert to true, while 0 will convert to false.
* The logical operators are useful for determining the value of a condition for example in an if statement
* The three main logical operators are Or (||), And (&&), and Not(!)
*/

// The And Operator
// The And operator will only return true if all of its operands are of value true. It will return false at the first false operand it comes upon

console.log(true && true);// true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false);//false

// The Or Operator
// The or operator will return true if any of its operands is true. It returns true at the first true operand it comes upon

console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false

// The Not Operator
// The not operator converts the boolean value found in its operand to the opposite corresponding value. Thus it converts true into false

console.log(!false && !false);//returns true


// Unary Operators
/* Unary operators are operators that only take a single operand. They can be found in action in for loops where we need to define an increment(++)
* or a decrement(--) for the looping function. Other popular unary operators are the typeof operator and delete operator.
*
*/
 for(let i = 0; i <= 10; i ++){
     console.log(i);//the ++ unary operator at work in a for loop helping us print the values 0-10 to the console
 }
 
 var hasBeen = [8, 7];
 
 console.log(typeof hasBeen);//the typeof operator at work helping us print the type of value inside the variable hasBeen
 
 delete hasBeen[1];//delete allows us to delete values from arrays or objects
 
 console.log(hasBeen);//here [8, <empty item] is returned
 
// Ternary Operator
/*
* The ternary operator takes three operands. The three paameters are Conditional, exprIfTrue and exprIfFalse.
* It is used to return an expression based on whether or not the conditional is true or false. The syntactic structure is
* condition ? exprIfTrue : exprIfFalse. Lets take a look at the ternary operator in action
*/

var height = 65

var rollerCoaster = (height >= 42) ? 'You can ride!' : 'Sorry, not allowed';

console.log(rollerCoaster);//returns 'You can ride!'

















