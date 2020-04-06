// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value) === true){
        return true;
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    /* Here I'm using a conditional which checks that typeof returns object but not null, array or date
    * this way the only object that will return true is an object as collection
    */
    if(typeof value === 'object' && Array.isArray(value) === false && value !== null && value instanceof Date === false){
        return true;
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    /*here we are doing the same as above only changing the first logical operator to or to ensure that true will be returned in the case that
    * we receive either an object as collection or an array. however if we do not also provide the conditions excluding null and dates on the left side of the or operator
    * then we will receive false positive because the two && statements are scoped within the or operator. thus it will print true for all values that satisfy typeof === 'object'
    */
    if(typeof value === 'object' && value !== null && value instanceof Date === false || Array.isArray(value) === true && value !== null && value instanceof Date === false){
        return true;
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    /* im going to write if/else statements that evaluate instances of typeof value.  based on what the result of typeof value ends up being
    * i will have the function return different values. I put object last that way i wouldn't have to put the exclusions as per above. If value were equal to array, null or date the code would have
    * stopped running before it hit the typeof value === object.
    */
    if(Array.isArray(value) === true){
    return 'array';
  }else if(value instanceof Date === true){
    return 'date';
  }else if(typeof value === 'string'){
    return 'string';
  }else if(typeof value === 'number'){
    return 'number';
  }else if(typeof value === 'undefined'){
    return 'undefined';
  }else if(typeof value === 'boolean'){
    return 'boolean';
  }else if(value === null){
    return 'null';
  }else if(typeof value === 'function'){
    return 'function';
  }else if(typeof value === 'object'){
    return 'object';
  }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
