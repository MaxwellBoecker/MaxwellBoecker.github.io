// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  /* Creating a for loop that will increment through the indexes of an array, printing the values stored at each index
  */
  
  for(var i = 0; i <= array.length -1; i++){
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /*this is the same as the above only I will start at index array.length - 1, end at the 0 index
  * and decrement instead of increment
  */
  for(var i = array.length -1; i >= 0; i--){
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //using Object.keys will automatically place all the keys it finds in object into an array
  
  return Object.keys(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /*creating a for in loop which will loop over the entire object and print each key name to the console as it goes
  */
  for(var key in object){
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*here I can use the Object.values method to return the values in the object at each key
  */
  return Object.values(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*using a for in loop to loop over the keys in the object, printing each value stored at the given key
  */
  for(var key in object){
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
/*First Im going to declare a variable whose value is the array keys produced by the Object.key function
* then I will perform .length on the array and return the value
*/
  var myArray = Object.keys(object);
  return myArray.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  /*looping throught the object and pushing the values at each key into an array should create an array with index 0 corresponding to the first value in the object
  then i will have to loop over the array in reverse and print those values to the console
  */
  var myArray = [];
  
  for(var key in object){
    myArray.push(object[key]);
  } for(var i = myArray.length -1; i >= 0; i--){
    console.log(myArray[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
