/* STRING MANIPULATION
*
* 0. It is true that strings are a simple data type, and thus should be immutable. However when assigned to a variable,
* JavaScript treats the variable as a string object instance. Thus we can use a variety of interesting methods to manipulate them.
* The string object instance is indexed therefore it has a length property and can be accessed at a certain index, for example, 
* in order to split the string or find a substring.
*
*/

// 1. String Manipulation Methods
// Here we will look at some of the string manipulation methods.

/* toUpperCase and toLowerCase
*
*/

var city = 'Dublin';

console.log(city.toLowerCase());// returns 'dublin'

console.log(city.toUpperCase());// returns 'DUBLIN'

/* The concat() method joins any number of specified strings
*
*/

// The syntax of the concat method is var1.concat(var2, var3, etc)
var town = 'London'

console.log(city.concat(town));// returns DublinLondon

// if we want a space in between the two city names then we specify that in the arguments

console.log(city.concat(" ", town));// returns 'DubliN London'

/* There ar a couple methods to extract characters of strings:
* The charAt() method and the property access []
*
*/

// The charAt() method returns the value at a specific string index

var dessert = 'cake of all kinds';

// the syntax is varname.charAt(index)
dessert.charAt(0);

console.log(dessert.charAt(5)); //returns 'o'

// The property access [] also return a string at a specific index

// The syntax is just varname[index]
dessert[6];

console.log(dessert[9]);// returns 'l'

// 2. String Manipulation Operator

/* Instead of using concat() we can use the simple addition operator +. We can also use the unary operator
* += to add a string and assign it back to the same variable
*/

dessert += ' yay!';

console.log(dessert); //returns 'cake of all kinds yay!'

var name = 'Max';

var fullName = name + ' ' + 'Boecker';


console.log(fullName);// returns "Max Boecker"










