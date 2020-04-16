// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
/* Our typeOf function works in essentially the same manner as the built in
* typeof operator only with more specificity insofar as it will distinguish
* between array, object and null, whereas the typeof operator lists them all as type 'object'.
* In order to accomplish this we had to build a chain of conditional statements weeding
* out array and null before proceeding to calling typeof for object value.
*/
_.typeOf = function(value){
    if(typeof value !== 'object'){
        return typeof value;
    }else if(Array.isArray(value) === true){
        return 'array';
    }else if(value === null){
        return 'null';
    }else{
        return typeof value;
    }
    
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    /*for this function we need to return [] if we are given something other than an array
    * instead of array, [] is we are not given a number argument or given something that is 
    * not a number, and a number of first values of the array as specified by the number argument.
    * we accomplished this with a simple conditional chain, with a loop in the last condition
    * if we are given an array and a number. The loop iterates over the array, pushing <number> values into the new
    * array to be returned. The trick was accounting for a given number that is larger than the total 
    * number of indexes in the array. We accounted for this by setting the 'while' condition of the loop
    * to: i < number && i < array.length. That way whichever limit we reach first, number or array length, stops the loop.
    */
    if(!Array.isArray(array)){
        return [];
    }else if(number === undefined || isNaN(number)=== true){
        return array[0];  
    }else{
        var myArray = [];
        for(let i = 0; i < number && i < array.length; i ++){
            
            myArray.push(array[i]);
            
        }
    }return myArray;
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
/* Last is the same as first only we have to start iterating forward over the array at array.length - number.
* That way it prints the last values of the array.
*/
_.last = function(array, number){
    if(!Array.isArray(array)){
        return [];
    }else if(number === undefined || isNaN(number)=== true){
        return array[array.length - 1];  
    }else if(number > array.length){
        return array;
    }else{
        var myArray = [];
        for(let i = array.length - number; i < array.length; i ++){
            
            myArray.push(array[i]);
            
        }
    }return myArray;
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
/* indexOf has two parameters: an array and a value. It loops over the array searching for 
* an element that is the same as value. If it finds one, it returns the index at which it found
* the match. If not, it returns -1.
*/

_.indexOf = function(array, value){
    for(let i = 0; i < array.length; i ++){
        if(array[i] === value){
            return i;
        }
    }return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
/* The contains function takes an array and a value as arguments. It loops over the array
* searching for a match between array[i] and value. If it finds a match it returns true. 
* If not it returns false
*/
_.contains = function(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    }return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

/* Each takes has two parameters, it takes a collection and a function. It tests first whether
* the collection is an array or object. If array, it uses a for loop to call the given function for each element in array
* with the arguments collection[i], i and collection. If object, it runs a for in loop with the 
* arguments collection[key], key, collection.
*/
_.each = function(collection, func){
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    }else if(typeof collection === 'object'){
    for(var key in collection){
        func(collection[key], key, collection);
    }    
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/* Here we looped over the array to access the values inside the array and
* for each value we invoked the indexOf operator. We started with an empty array
* newArray and for each value we grabbed out of the array while looping, we checked to see
* if that value existed in newArray. If not, we pushed it in. If it was already present, we did 
* not add the value. Thus we weeded out the duplicates and returned newArray free of 
* the duplicates.
*/
_.unique = function(array){
    var newArray = [];
    for(let i = 0; i < array.length; i++){
        if(_.indexOf(newArray, array[i]) === -1){
            newArray.push(array[i]);
        }
    }return newArray;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/* filter takes an array and a function. For each element in the array, it calls the function
* with the arguments array[i], i, and array. 
* we used a for loop to access all the elements. If the function returns true, we push array[i]
* into newArray and return newArray at the end of the loop.
*/
_.filter = function(array, func){
    let newArray = [];
    for(let i = 0; i < array.length; i ++){
        if(func(array[i], i, array) === true){
            newArray.push(array[i]);
        }
    }return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/* reject takes an array and a function. It passes the function to the filter function,
* which returns an array of the elements which, passed as an argument to the function, 
* caused the function to return true. These are the very arguments we do not want in our return array.
* Thus we needed a way to return an array without these items in it. Using the splice 
* method directly on the array given failed the test because we needed to create a function
* that did not alter the arguments given to it. To solve this problem, we mapped the array 
* to a new variable, storing precisely the same values as in the old array but at a new
* reference number. Then we could use the splice method to remove the unwanted values. To accurately splice
* the unwanted values from the given aray, we ran a nested for in loop which cut out any value at 
* [i] in array when it matched any element in the filter array at [j]
* 
*/
_.reject = function(array, func){
    var myArray = array.map(s => s);
    var newArray = _.filter(array, func)
    for(let i = 0; i < myArray.length; i++){
        for(let j = 0; j < newArray.length; j++){
         if(myArray[i] === newArray[j]){
            myArray.splice(i, 1);
         }   
        }
    }return myArray;
}
/*
_.reject = function(array, func){
    var myArray = [];
    var newArray = _.filter(array, func);
    for(let i = 0; i < array.length; i++){
        if(_.indexOf(newArray, array[i]) === -1){
            myArray.push(array[i]);
        }
    }return myArray;
}
*/

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

/* Partition basically performs as filter and reject combined into one function. it takes an array
* and a function and produces two arrays, one of elements that, when passed to the function as 
* arguments, returned false and one of elements that, when passed to the function as arguments returned
* true. These arrays are then pushed into one array which is returned.
*/ 
_.partition = function(array, func){
    let totalArray = [];
    let tArray = [];
    let fArray = [];
    for(let i = 0; i < array.length; i++){
    if(func(array[i], i, array) === true){
        tArray.push(array[i]);
    }else if(func(array[i], i, array) === false){
        fArray.push(array[i]);
    }
    }totalArray.push(tArray, fArray);
    return totalArray;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/* The map function has two parameters: a collection and an array. It tests the collection to determine
* whether it is an object or an array. Then it loops over the collection calling for each element with
* the arguments value, key collection. It then stores the result of calling the function in a new array
* and returns the aray.
*/
_.map = function(collection, func){
    var newArray = [];
    if(_.typeOf(collection) === 'array'){
        for(let i = 0; i < collection.length; i++){
            newArray.push(func(collection[i], i, collection));
        }
    }else if(_.typeOf(collection) === 'object'){
        for(var key in collection){
            newArray.push(func(collection[key], key, collection));
        }
    }return newArray;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
/* Pluck takes an array of objects and a property. It uses map to access each object in the array.
* we have to write a helper function whereby map will be able to access and return an array of the values for
* the given property in each object in the array.Because as the a parameter will always be collection[i], we just need
* the helper function to return collection[i][prop], so we specify return a[prop] in the helper function.
*/
_.pluck = function(array, prop){
    var newArray= [] ;
    function fun(a, b, c){
        return a[prop];
    }
    return _.map(array, fun)
    
    
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

/* every takes a collection and a function. It determines if the collection is an array or an object.
* it calls function for each value/element in the collection, its key/index, and the collection. If any function calls
* return false, we return false from the function. If all function calls return true, we return true. If no 
* function is provided, we evaluate the elements/values and if their values are truthy, we return true, otherwise false if they are not.
*/

_.every = function(collection, func){
    if(Array.isArray(collection)){
       
        for(let i = 0; i < collection.length; i++){
            if(func === undefined){
                if(collection[i] == false){
                    return false;
                }
                    return true;
                
            }
            else if(func(collection[i], i, collection) === false){
               return false; 
            }
        }
    }else if(typeof collection === 'object'){
        for(var key in collection){
            if(func === undefined){
                if(collection[key] == false){
                   return false; 
                }return true;
            }
            else if(func(collection[key], key, collection) === false){
              return false; 
            }
        }
    }return true;
}
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

/* The some function takes two parameters, a collection and a function. What it returns is the logical inverse 
* of that which is returned in the every function. If the function called with any one element returns true, we will
* return true out of the function. If all calls return false, then we return false. If no function is given then we 
* return true if even one value is truthy, or false otherwise.
*
*/


_.some = function(collection, func){
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i ++){
            if(func === undefined){
                if(collection[i] == true){
                    return true;
                }return false;
            }else{
                if(func(collection[i], i, collection) === true){
                    return true;
                }
            }
        }return false;
    }else if(typeof collection === 'object'){
        for(let key in collection){
            if(func === undefined){
                if(collection[key] == true){
                    return true;
                }return false;
            }else{
                if(func(collection[key], key, collection) === true){
                    return true;
                }
            }
        }return false;
    }
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

/** the reduce function takes an array, a function and a seed. For every element in the array we must call the function 
 * with the arguments previous result, element, and index. If it is the first function call, previous result will be undefined
 * so we must use seed as the starting value. If seed is not given, we assign array[0] to seed and the loop continues. to accomplish this,
 * we used a loop to grab every element of the array and then set up a chain of conditionals to the end of finding out whether or not
 * we had a previous value, a seed or neither. Thus the appropriate arguments would be passed to the function at the right times.
 */

_.reduce = function(array, func, seed){
    var result;
    for(let i = 0; i < array.length; i++){
        if(result !== undefined){
            result = func(result, array[i], i)
        }else if(seed !== undefined){
            result = func(seed, array[i], i)
        }else{
            var seed = array[0];
        }
    }  return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


/** The extend function takes an object and an array of (possibly many) more objects as arguments.
 * we specified this in parameters with the spread operator ...
 * it then takes all the key value pairs from the arguments given in the ...objects parameter and copies them onto
 * the first object given, which we called object1. In the end we should return object1 with all the 
 * correct modifications. 
 * 
 */
_. extend = function(object1, ...object){
    
    
    for(let i = 0; i < object.length; i++){
        for(var key in object[i]){
            object1[key] = object[i][key];
        }
    }return object1;
    
}






//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
