// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    /*To accomplish this task I will use a conditional statement and two for loops. The conditional will determine which loop to run, ascending or descending, based on 
    * a comparison of the arguments given to the range function. The chosen for loop will cycle between the arguments given 
    * and push them and each value in between into an array which will then be returned from the function
    */
    var myArray = [];
    
    if(start < end){
        for(let i = start; i <= end; i++){
            myArray.push(i);
            
        }
    }else if(start > end){
        for(let i = start; i >= end; i--){
            myArray.push(i);
            
        }
    }return myArray;
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}