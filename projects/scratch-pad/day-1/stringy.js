// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    //this function takes a string as input and returns the length of the string
    
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
    //converting this string to lower case
    
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    /*
    *converting the string to upper case
    */

    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    /*First I convert the string to lower case.
    * Then I will split the string and rejoin it with a dash in between, finally returning the string in dash case
    */
    string = string.toLowerCase();
    string = string.split(" ");
    string = string.join('-');
    return string;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //first I am converting the string and character to uppercase, that way a difference in case will not impede the boolean evaluation
    string = string.toUpperCase();
    
    char = char.toUpperCase();
    
    /*creating an if statement which compares the value at index 0 of string with char
    * and returns a boolean value that is based on the value of the comparison of the arguments
    */
    
    if(string[0] == char){
        return true;
    }else{
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    /* The function endsWith takes two arguments for parameters, compares them, and returns a boolean value which 
    * corresponds to the boolean value of the comparison of its arguments
    *Here i will first convert the arguments for both parameters string and char to lower case
    * Then i will write an if statement such that the string at index length -1 is compared with char
    * returning true if the two values are equal and false if they are not
    */
    string = string.toLowerCase();
    char = char.toLowerCase();
    if (string[string.length - 1] === char){
        return true;
    }else{
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    /*Here I will concatenate two strings by using the += operator
    * the function takes two inputs and concatenates them, returning a string as the output
    */
    
   var newString = stringOne += stringTwo;
   
   return newString;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    /*The function takes arguments and stores them as an array
    Inside the function I'm creating a for loop that goes through the array and joins each element inside it together into a string which is the value of the var joined
    the value is then returned
    */
    for (var i = 0; i < args.length-1; i++){
        var joined = args.join('');
        return joined;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    //here i am creating an if statement that compares the length of the two arguments, returning the longest of them
    if(stringOne.length > stringTwo.length){
        return stringOne
    }else{
        return stringTwo
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    /*I read that it was possible to compare strings for aphabetical order just using normal comparison operators
    *so I used if and else if statements to compare the strings and return the appropriate output
    */
    if(stringOne < stringTwo){
        return 1;
    }else if(stringOne > stringTwo){
        return -1;
    }else if(stringOne === stringTwo){
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    /* since comparison works with alphabetical order in strings, I'm writing a conditional statement
    * which compares the two arguments given to function sortDescending and returns one of three results based on the comparison
    */
    if(stringOne > stringTwo){
        return 1;
    }else if(stringTwo > stringOne){
        return -1;
    }else if(stringOne === stringTwo){
        return 0;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
