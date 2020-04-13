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
/* What I have gleaned so far is that we have to use the countby function 
* in tandem with the stringcharacter function. 
* The countby function takes a string and a function as arguments.
* The function it takes will be the stringcharacter function. The string character function will perform an operation
* on each character in the given string and return which script it is from. 
* The string countby takes will be the string given to the dominant direction function. countBy employs a for of loop, whereby
* it uses the characterString function to find out which script each character is from based on its
* codeCharAt value and location in the SCRIPTS data set.If the character's script does not already have an object value inside the 
* counts aray, one is created with a name and a count key that reflects how many instances of this
* script exist in string. If the object exists, we just modify count. 
* In the end we should be able to compare the different objects in the counts array and determine which one has the 
* greatest count value.
*/
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}


let scripts = countBy(string, char => {
    let script = characterScript(char.codePointAt(0));
    if(script !== null)
    return script.direction;
  });
  if(scripts[0].count > scripts[1].count){
    return scripts[0].name
  }else{
    return 'rtl'
  }
    
  
  
  
  


 

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
