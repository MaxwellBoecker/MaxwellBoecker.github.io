/*
* DATATYPES
* 
* Datatypes in JavaScript are the actual values that we perform operations on.
* They fall into two categories: simple and complex
*
* 0. Simple Data Types
*
* Simple data types are atomic insofar as they are unchangeable. They 
* cannot hold other pieces of data within them. Any operation performed on them
* does not change them but rather produces a new value. The simple data types we'll be talking about
* are Number, Boolean, String, Undefined, Null, NaN, infinity and -infinity. It is important to 
* note that the simple data types are stored as values in the memory of a variable as if they 
* were stored in a box. The value in the box may only change if we tell the interpreter to change it.
* 
* 1. Complex Data Types
* 
* Complex data types are considered complex because they aggregate other data types. They can 
* aggregate simple or complex data types and are theoretically infinite in size. The complex data
* types we'll be talking about here are Object, Array and Function. It is important to note
* that complex data types are stored as a reference inside of a variable, not as an actual value.
* This is because the maximum allotment of memory in any one variable is only enough 
* to store one unit of simple data. As complex data types have no upper limit to their potential size, 
* they are stored as references.
* 
*/
 
 //0. Examples of Simple Data Types
 
 // Number
 var num = 3;//the variable num is holding the number 3
 
 // Boolean
 // A Boolean is a true/false value
 var myBool = true;//the variable myBool contains the boolean value true
 
 // String
 // A string is any set of characters between '' or " "
 var string = "my string";//the variable string now holds the string "my string"
 var stringTwo = '3er5tw4';//the variable stringTwo is also holding a string
 
 // Undefined
 // The undefined data type has only one value- undefined. It occurs when a variable has been declared but not assigned
 
 var weather;
 
 console.log(weather);//returns undefined
 
 // Null
 // The null data type also has only one value- null
 // When a variable is assigned the value null it is completely emptied of all content
 
 var empty = null;
 
 //NaN
 /* NaN or Not a Number is a numeric data type. It is the value returned 
 * from running an arithmetic operation which has a non numeric result
 */
 console.log(0/0);//returns NaN
 
 console.log(0/'a');//returns NaN
 
 // Infinity and -Infinity
 // These are numeric data types which represent the concepts infinity and -infinity
 
 // 1. Complex Data Types
 
 /* Object
 * The object data type is bounded by curly braces and populated with key/value pairs
 * which are separated by commas. The key comes first in a key/value pair, followed by a colon, 
 * followed by a value.
 */
 
 var myObj = {}; // declaring an empty object literal
 
 myObj = {nameFirst: 'Maxwell', nameLast: 'Boecker'}; // Populated with key/value pairs
 
 // Unlike simple data types, complex data types are not immutable. Thus we may change 
 // them by adding or removing values to or from them
 
 myObj.weight = 185;// Adds the key/value pair {weight: 185} to myObj
 
 console.log(myObj);// logs {nameFirst: 'Maxwell', nameLast: 'Boecker', weight: 185}
 
 // Objects can also hold complex data types
 
 var theObj = {blimp: 'Goodyear', balloon: {a: 1, b: 2}, ourArray: [1, 2, 3]};//theObj holds both an array and an object inside of it
 
 /* Array
 * The array data type is similar to the object data type in that it can hold a theoretically unlimited number of 
 * values, is mutable, and can hold both simple and complex data types within it. Arrays differ from objects in a couple of 
 * important respects. First, arrays are bounded by brackets. Second, the information in arrays is not stored by key/value
 * pairs. Rather, the values are held specific numerical indexes, one value to an index. The first entry in an array is stored at index 0, 
 * the second is at index 1 and so on.
 */
 
 var myArray = [];// declaring an empty array
 
 myArray.push(1, 2, 3);// populating myArray
 
 console.log(myArray);// logs [1, 2, 3] to the console
 
 myArray.push(['a', 'b', 'c'])// this pushes an array(complex data type) into myArray
 
 /* Functions
 *
 * A function is an object which executes a block of code. Since it is an object it can be 
 * assigned to a variable and even used as an argument in another function. The function must
 * have parantheses, between which a parameter is specified, and curly braces within which the code block to be executed
 * at function call is located
 */
 
 var myFunction = function(parameter){
     //code block goes here
 }
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

