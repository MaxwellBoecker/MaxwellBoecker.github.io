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
 // numbers can be positive, negative or decimals
 var num = 3;//the variable num is holding the number 3
 var num1 = -1;// num1 holds -1
 
 // Boolean
 // A Boolean is a true/false value
 var myBool = true;//the variable myBool contains the boolean value true
 
 // String
 // A string is any set of characters between '' or " "
 /* Although strings are considered a simple data type, when assigned to 
 * a variable they become a 'string object instance', and thus we can operate on these
 * type of strings as if they are arrays; each character will have an index. These contrast with string primitive, which
 * refers to an unitialized string.
 */
 var string = "my string";//the variable string now holds the string object "my string"
 console.log(string[0])// will log 'm' to the console
 var stringTwo = '3er5tw4';//the variable stringTwo is also holding a string
 
 // Undefined
 // The undefined data type has only one value- undefined. It occurs when a variable has been declared but not assigned
 
 var weather;
 
 console.log(weather);//logs undefined to the console
 
 // Null
 // The null data type also has only one value- null
 // When a variable is assigned the value null it is completely emptied of all content
 
 var empty = null;
 
 //NaN
 /* NaN or Not a Number is a numeric data type. It is the value returned 
 * from running an arithmetic operation which has a non numeric result
 */
 console.log(0/0);//logs NaN to the console
 
 console.log(0/'a');//logs NaN to the console
 
 // Infinity and -Infinity
 // These are numeric data types which represent the concepts infinity and -infinity
 console.log(Infinity)// logs Infinity to the console
 
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
 
 
 // 2. Copy by Value vs. Copy by Reference
 /**
  * When variables are assigned the value of a simple data type, the actual value of that data type is stored in memory
  * in the variable. By contrast, only the reference number in memory for a variable that has been assigned to a complex data
  * type. The essential contrast between these two storage methods is that if two different variables have been assigned the number
  * 2, and we reassign one of the variables to the value 1, the end result is that one variable will be assigned the value of 1 and 
  * the other will be assigned the value of 2. However, if one object is initialized and then another object is assigned to the first object,
  * the reference number is copied over from the first object to the second and changing either object will change them both. This is
  * because changing one will store the change at the reference number, and because both objects are stored at the same reference number
  * they will both feel the change.
  * 
  */
  
  var num = 2;
  var num1 = 2;
  num1 = 1;//reassigning num1
  console.log(num);// num will still equal 2
  
  var obj = {food: 'pizza'};//initializing obj
  var obj2 = obj;//setting obj equal to obj2. now they should have the same reference number
  obj.drink = 'beer'; //adding the key/value pair drink/beer to obj. Let's see if this change makes it into obj2
  console.log(obj2);//logs {food: 'pizza', drink: 'beer'} to the console

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

