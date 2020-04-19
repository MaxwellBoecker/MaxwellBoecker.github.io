/* LOOPS IN JAVASCRIPT
*
* 0. Loops in JavaScript are used to perform a repeated action. There are three main loops in 
* JavaScript: the for loop, the for in loop, and the while loop. Each loop is tailored toward 
* use with a specific data type. The for loop works well with arrays, but cannot work on objects.
* The for in loop is specific to working with objects. The while loop is good for working wih 
* indexed data types or just for repeating an action until a certain condition for stoppung
* has been reached. Let's take a look at these loops in action!
*
*/

// 1. The For Loop

/* The for loop is an ideal candidate for performing a loop on an indexed object, or array. It will access 
* the value contained at each index in an array via bracket notation (see example below). The syntactic componenents which comprise its
* essential form are: the keyword for, open parenthesis, a variable assignment for the starting index of the loop, 
* semicolon, the ending index of the loop, semicolon, the value of the incrementation
* for each instantiation of the loop, closed paranthesis, curly brackets with the code block to be executed 
* at each pass of the loop. Let's take a look at an example.
*/
var myArray = [1, 2, 3, 4, 5, 6, 7];

for(let i = 0; i < myArray.length; i++){
    console.log(7 * myArray[i]);// prints 7, 14, 21, 28, 35, 42, 49
}
/*Here we have set up a loop to increment at a value of 1 starting at index 0 and going until the index right before myArray.length.
* We use the value of i in bracket notation in the code block on myArray in order to access the value contained at each index and to 
* multiply it by 7.
*/

// Due to the fact the for loop deals with indexed objects, we can also loop backwards over the array by changing the looping conditions

for(let i = myArray.length -1; i >= 0; i--){
   console.log(7 * myArray[i]) ;//prints 49, 42, 35, 28, 21, 14, 7
}


// 2. The For In Loop

/* However should we loop inside of non-indexed objects to perform operations on the values inside? The for in loop!
* The for in loop is ideal for use on objects because it automatically loops through every key in an object. 
* The syntax is slightly different than that of the for loop but the overall layout is the same. The components are:
* keyword for, open paranthesis, variable declaration key, keyword in, name of the object we are looping in, closed paranthesis, 
* curly brackets containing code block to be executed within. In much the same way as we used bracket notation to access the
* values at each index in the array with [i], we can use [key] in the code block to access the value in the object at each key.
* Let's take a look
*/
var myObject = {nameFirst: 'MAX', nameLast: 'BOECKER'}

for(var key in myObject){
    console.log(myObject[key].toLowerCase());//Prints max then boecker
}


// 3. The While Loop

/* The while loop executes its code block for each increase in the incrementer until the starting condition becomes false.
* Its kind of like saying, "while this is true, do that each time you check" The essential syntax is: keyword while, 
* condition in parantheses, open curly bracket, incrementer, statement to be performed at each increment, closed curly bracket.
*/
var x = 0;

while(x < 20){
    x++
    console.log(x);//prints the values 1 - 20 to the console
}


// 4. Infinite Loops
/**
 * Infinite loops are caused by incorrect definition of either ending condition or increment. The ending condition will never be reached, so
 * they will never stop. An infinite loop will cause a program to crash.
 */

////   for(let i = 0; i < array.length; i--){}
    
//This will cause an infinite loop. The incrementer is set to be a decrementer. Because the ending condition, which is above 0 will
// never be reached, this loop will continue on infinitely.


