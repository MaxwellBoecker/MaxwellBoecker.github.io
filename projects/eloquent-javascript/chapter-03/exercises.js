////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*For this function a simple conditional chain will do. We take two inputs, compare their values and return the lower one.
* It is also important to return one of the arguments if they are the same number.
*/
function min(num1, num2) {
  if(num1 < num2){
    return num1;
  }else if(num2 < num1){
    return num2;
  }else{
    return num1;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Here we are supposed to write a function that takes one parameter and returns 
* true if the number = 0 or false if the number = 1. We are supposed to use recursion
* which is modeled off a certain definition of odd/even. 0 is even, and n-2 is even. So
* basically we just have to show that eventually, whichever number we are given will either
* become 0 or 1 after enough recursion.
*
* Setting up the recursion requires an if chain. If the number is equal to 0, return true, 
* if number = 1, return false, if neither case is true, we set up recursion by calling the function with 
* an argument of number - 2. Each time the if and if else conditions fail we decrement the 
* value of number by 2.
*
* Since feeding this function a negative number would result in an infinite recursion, we convert the
* value of the argument with Math.abs() before the conditional chain
*/
function isEven(number) {
  number = Math.abs(number);
  if(number === 0){
    return true;
  }else if(number === 1){
    return false;
  }else return(isEven(number -2));
  
    
}console.log(isEven(2))

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Here we are writing a function that takes two inputs, a string and a character.
* It will output the number of times that the character occurs in the string.
* In order to do this we define a variable count, which will be incremented every time we find 
* the letter in the string. We create a for loop that searches the indexes of the
* string. Inside the for loop is a sonditional. If the character at the string
* index[i] is strictly equal to the argument given for char, we increment count. 
* In the end we return count.
*/
function countChars(string, char) {
  var count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === char){
      count +=1;
    }
  }return count;
  
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* This function is essentially the same as the above function except that it takes one 
* less parameter. We hard code it to search the string to find instances where
* string[i] is strictly equal to 'B'
*/
function countBs(string) {
  var count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === 'B'){
      count+=1;
    }
  }return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
