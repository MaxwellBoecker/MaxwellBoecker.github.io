// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*Here we need write the body for a function cqlled flatten. Flatten takes one input, an array of arrays.
* It returns them as one array. There are three parts to the reduce function. It takes an input
* which in this case is arrays, then it operates on them taking each value and concatenating it with 
* the next value it finds. The third element is the starting point, which is an empty array.
* the concatenated string goes into this empty array which gets assigned to newArray, then 
* returned from the flatten function.
*/
function flatten(arrays) {
  var newArray = arrays.reduce((a, b)=>{
    return a.concat(b);
  }, []);
  return newArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*I basically wrote this as a standard loop where the looping conditions are defined by 
* functions given. The code block also uses a given function to act on value.
*/
function loop(value, test, update, body) {
  for(value; test(value) === true; value = update(value)){
      body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/* here we receive an array and a condition. Looping over the array we grab the value
* at i. If this value fails the conditional, we return false because we are trying to make 
* sure we only pass arrays where every value passes the test. If the conditional passes, the loop continues
* If no false value is found, the loop ends and the code return true is executed.
*/
function every(array, func) {
  for(let i = 0; i < array.length; i++){
    if(func(array[i]) === false){
      return false;
    }
  }return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/* Here we are taking a string. We are finding out which characters correspond to which scripts, 
* then counting the number of characters that belong to each script, then determining the writing
* direction of the script that has the most characters in the string
*/
 


function dominantDirection(string) {

let countArr = countBy(string, function(text){
  let characterInfo = characterScript(text.charCodeAt())
  if(characterInfo){
    return characterInfo.direction;
  }
});
  
 countArr.sort(function(a, b){
   return b.count - a.count;
 })
 return countArr[0].name;
}



// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
