// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
/*This project requires a for loop that will cycle the numbers 1-100 one time at an increment of 1
*it also requires multiple conditionals. the first conditional will test whether the number represented by [i] is divisible by 3 and also divisible by 5. this requires
*using the modulus operator to compare the value [i] and the values 3 and 5. If the remainder of division between two numbers(6, 3) is zero, then 6 is a multiple of 3, and the program should print fizz
*the tricky part is making sure that the conditional first compares [i] for whether or not it is both a multiple of 3 and 5. doing either multiples of 3 or multiples of 5 first would stop the code
*at that code block and not give us any of the numbers that are divisible by both
*/
    for(var i = 1; i <= 100; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        }else if(i%3 === 0){
            console.log("Fizz");
        }else if(i%5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}