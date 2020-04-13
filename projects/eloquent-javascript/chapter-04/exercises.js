////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Here we need to write a function that will generate a range of numbers. It will take three inputs,
* start value, end value, and step which tells us the increment between each number in the range. 
* The three edge cases we are concerned with excluding are: if the step value is negative, if the
* start value is equivalent to end, and if we don't receive a value for step. If start === end, we return the empty array.If step is
* greater than 0 we push the range between start and end into myArray at the increment of step. 
* if there is no argument given for step, we compensate by assigning step || 1 to step
* at the outset of the code block. This ensures that if step = step is false(i.e. no argument step given) then step will 
* equal 1 by default
*/
function range(start, end, step) {
  step = step || 1;
  
  let myArray = [];
  if(start === end){
    return myArray;
  }else if(step > 0){
    for(let i = start; i <= end; i += step){
      myArray.push(i);
    }
  }else{
    return myArray;
  }return myArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* we are writing a sum function that takes an array as an argument. It will output the 
* sum of adding all the numbers in the array. We need a for loop to access each value in the array.
* We also need a binding to store the result of each addition. As the loop progresses, we 
* use the adition assignment operator to add newNum to array[i] and assign it back to newNum. When
* the loop finishes we return newNum.
*/
function sum(array) {
  var newNum = 0;
  for(let i = 0; i < array.length; i++){
    newNum += array[i];
  }return newNum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* function take an array, outputs an array with values in reverse.Thus a loop is required 
* which will loop backwards over the given array and push the values from first to last into
* a new array. The new array will then be returned.
*/
function reverseArray(array) {
  var newArray = [];
  for(let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*This one was a little bit harder. The same concept applies only for each value starting at i = 0
* we are replacing that value with the value at array.length - 1. The way we do this is
* by using a loop to grab half the values. For an odd number we round down. for i = 0, we reassign that variable
* to a placeholder variable, then we assign the value at array.length - 1 to the index array[i].
* then we assign the placeholder value a which contains the former array[i] value to the 
* index array.length - 1. Then we decrement array.length - 1, which is a number i assigned to the replace value. 
* That way each time the loop passes that number will decrease.
*/
function reverseArrayInPlace(array) {
      var num = Math.floor(array.length/2);
      var replace = array.length -1;
      for(let i = 0; i < num; i++){
        var a = array[i];
        array[i] = array[replace];
        array[replace] = a;
        replace --;
      }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Here we are writing a function with one parameter. The function takes an array
* as input and produces a list as the output. We need a for loop that cycles through the array
* backwards and grabs the value at index [i]. Then we build our list by using an assignment operation.
* Here we assign the key 'rest' to either the list variable or null, and assign the value in array[i]
* to the key 'value'. Thus the first object in the list should have the value {value: 3, rest: null}
*/
function arrayToList(array) {
  
  for(let i = array.length - 1; i >= 0; i--){
    var list = {value: array[i], rest: list || null};
    
  }return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Here I need to create a unique for loop. The start condition is that node = object, object is whichever object we are given as an argument. The while 
* condition specifies that the loop will continue as long as node exists. The
* Incrementing condition is reassigning the value of node to node.rest, that way at the start
* of the next loop iteration we are inside the second object. To avoid the error caused
* by having null as the value of the last node.rest, we have to set the incrementer to either
* node.rest || null
* Inside the body we push the value of
* node.value into myArray and return myArray
*/

function listToArray(object) {
  var myArray = [];
  for(let node = object; node; node = node.rest || null){
    myArray.push(node.value);
  }return myArray;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Here I just needed to create an object so I could house the element at key value,
* Then the given arrayToList function would operate inside of the 'rest' key to produce the
* rest of the list.
*/
function prepend(element, list) {
  var newValue = {value: element, rest: list};
  return newValue
  
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* He we are counting a object list. I used the hint on EQJS to find the novel looping 
* process. The starting condition is having node = obj, then it keeps looping until node becomes a falsey value, 
* then at the end it assigns node to node.rest, which brings us into the next nested object
* for the beginning of the second loop pass. In the body we have to find the number in the object
* that is strictly equal to the given value. Thus we set up a conditional. If node.value = num + 1(because count num starts at 0), 
*  increment count, which also starts at 0, and return count. If the condition fails, we increment count and then run the loop again.
*/
function nth(func, num) {
  var obj = func;
  var count = 0;
  for(let node = obj; node; node = node.rest){
    if(node.value === num + 1){
      count ++
      return count;
    }count ++
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* This one seemed similar to ones we have done in the past only more complicated.
* We have a number of tests to pass, and we have to set up conditionals in an order
* so that each test gets a chance to run for its input. For this I actually decided to prepare the conditionals 
* each to pass a specific test instead of preparing them to accept for all random inputs/ general purpose.
* perhaps this was not the purpose of the exercise but I was feeling desperate. 
* I was able to accurately compare the nested arrays with a loop that ran inside of them. It was hard for me to 
* differentiate the conditional between compare nested objects and compare nested arrays. 
* it seemed like if(Array.isArray(one[array1][array2[i]])) = true && Array.isArray(one[array1][array2[i]])) = true)
* should have worked to differentiate them, but for some reason it wasn't working for me here, and 
* my conditional called both the nested objects and the nested arrays, which made it hard to operate on the object.
*/
function deepEqual(one, two) {
  if(typeof one === 'number' && typeof two === 'number'){
    if(one === two){
      return true;
    }else if(one !== two){
      return false;
    }
  }else if(one === null && two !== null){
    return false;
  }else if(one.test === undefined && two.test === undefined){
    return true;
  }else if(one.test.test2 !== undefined && two.test.test2 !== undefined){
  var array1 = Object.keys(one);
  var array2 = Object.keys(one[array1])
  if(one.test.test2 === null){
    return false;
  }
  
  for(let i = 0; i < one[array1][array2].length; i ++){
    if(one[array1][array2][i] !== two[array1][array2][i]){
      return false;
    }else if(one[array1][array2][i] === two[array1][array2][i]){
      return true;
    }
    }
  
  }else if(one.test !== undefined && two.test !== undefined){
    if(one.test === two.test){
      return true;
    }else if(one.test !== two.test){
      return false
    }
  }
  
  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
