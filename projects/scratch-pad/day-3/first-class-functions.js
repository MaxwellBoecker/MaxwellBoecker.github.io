// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /*here i am creating a nested function inside the createGreaterThanFilter function
    * which will test whether or not a given value is greater than the base value
    * the parameter of the outer function is base
    * the parameter of the inner function is value
    */
    return function(value){
  
  if(typeof base === 'number'){
   
    return value > base;
  }else if(typeof base === 'string'){
    
    return value > base;
  }
}

    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /* the createLessThanFilter take a parameter base. the nested function takes one parameter value
    * which will be the given value. the nested function first tests if type of base is equal to string or number.
    * it then returns the value of the comparison of base and value
    */
    return function(value){
  
  if(typeof base === 'number'){
   
    return value < base;
  }else if(typeof base === 'string'){
    
    return value < base;
  }
}
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /* writing a function to determine whether or not the given String begins with the character given in the startsWith parameter
    * Inputs: one parameter String
    * Outputs: boolean value for whether String starts with startsWith
    * Constraints: must use the startsWith() method applied to String
    */
    return function(string){
        string = string.toUpperCase()
        if(string.startsWith(startsWith.toUpperCase()) === true){
            return true;
        }else{
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    /*Here I will be writing a function to determine whether or not a given character, endsWith, is the last letter of a given string
    * Inputs: the function will take one parameter, the string
    * Outputs: the function will return true or false depending on whether the last letter of string is endsWith
    * Constraints: I will be using the endsWith method
    * Edge Cases: because endsWith is case sensitive I first need to convert all the letters in the string to upper(or lower) case, as well as the character endsWith
    * that way we will not return a false result for 'g' and 'G', both of which are the same letter. so im going to use a for loop to capitalize each letter, push it to an array
    * then I am going to string-ify the array
    */
    
    return function(string){
        var myArray = []
        for(let i = 0; i <= string.length - 1; i++){
          var res = string[i].toUpperCase();
          myArray.push(res);
          var str = myArray.toString();
        }if(str.endsWith(endsWith.toUpperCase()) === true){
            return true
        }else{
            return false
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    /*here I'm going to create a new empty array which should hold the modified strings
    * Then I'm going to use a for loop to cycle throgh the array strings
    * as each string is passed into the for loop it is modified and assigned to the variable newStrings
    * newStrings is pushed into the above array 
    * after each string is pushed into the array the for loop stops and the array of modified strings is returned
    */
    var stringsTwo = []
    for(let i = 0; i <= strings.length - 1; i++){
        var newStrings = modify(strings[i]);
        stringsTwo.push(newStrings);
    }return stringsTwo;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    var passArray = [];
    for(let i = 0; i <= strings.length - 1; i++){
        if(test(strings[i]) === true){
            passArray.push(strings[i]);
        }
    }if(passArray.length === strings.length){
        return true;
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}