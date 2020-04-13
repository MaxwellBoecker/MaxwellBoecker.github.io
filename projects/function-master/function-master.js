//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Here we pushed all the keys in a given object into an empty array, giving an array
* of key names. Then we returned the array.
*/ 
function objectValues(object) {
    var arr = [];
    for(var key in object){
        arr.push(object[key]);
    }return arr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Here we did the same thing as above only after we get the key names into an array
* we use the join method to join them into a string each separated by a space
*/
function keysToString(object) {
    var arr = [];
    for(var key in object){
        
        
        arr.push(key);
        
        
        
    }var string = arr.join(' ')
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Here we took only the string object values from an object and pushed them
* into an array which we joined by a space and returned. For each key, we investigated
* whether the key value was typeof string. If this conditional passed, we pushed it into the array
*/
function valuesToString(object) {
    var arr = [];
    for(var key in object){
        if(typeof object[key] === 'string'){
            arr.push(object[key]);
        }
    }return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Here we are just doing basic differentiation between object and array. Since with typeof they
* will both return object we had to check for the array first. Array.isArray gives us 
* whether or not the given value is an array. If not, and it is an object, it will return true for object.
*/
function arrayOrObject(collection) {
    if(Array.isArray(collection) === true){
        return 'array';
    }else if(typeof collection === 'object'){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Here we took a string, split it into an array of characters, then spliced the first index.
* Inside the splice we took element at 0 index, 1 element, and returned it to arr[0] after 
* performing the toUpperCase method on it.
*/
function capitalizeWord(string) {
    var arr = string.split('');
    arr.splice(0, 1, arr[0].toUpperCase());
    return arr.join('')
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Here we had to split the given string of strings at each space. The strings 
* went into array1. Then we loop over array1. we grab array1[i], which is a string
* and then split that into an aray of characters in array3. Now we are ready to splice the character
* at 0 index in array3 and return it to Upper Case. Then we join array3 into a string
* and push it into array2, an empty array. After each word is capitalized we return the
* array of capitalized strings.
*/
function capitalizeAllWords(string) {
    
  var array1 = string.split(' ');

  //console.log(array1)

  var array2 = [];

  for(let i = 0; i < array1.length; i++){
    var array3 = array1[i].split('')
    //console.log(array3)
    array3.splice(0, 1, array3[0].toUpperCase())
    //console.log(array3);
    var newString = array3.join('')

    //console.log(newString)

    array2.push(newString)
  } array2 = array2.join(' ')
  return array2
}
  


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Here we have to return a welcome message greeting the person who's name
* is stored at object.name. However, if given a lower case name, we first
* have to put it in upper case.
*/
function welcomeMessage(object) {
    var array = object.name.split('');
    
    array.splice(0, 1, array[0].toUpperCase());
    var string = array.join('');
    
    return 'Welcome ' + string + '!'
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Here we have to operate on object.name and object.species, sending them both
* to upper case before returning them as part of a string. The code looks much
* as it did above.
*/

function profileInfo(object) {
    var array = object.name.split('');
    
    array.splice(0, 1, array[0].toUpperCase());
    var string = array.join('');
    
    var array1 = object.species.split('');
    
    array1.splice(0, 1, array1[0].toUpperCase());
    var string1 = array1.join('');
    
    return string + ' is a ' + string1
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Here we have to return the status of an array of noises
* contained in the key noises on object. If there is no such key or
* if the array is empty, we return there are no noises. If the key is not undefined we 
* return the array joined into a string separated by a space.
*/
function maybeNoises(object) {
    if(object.noises === undefined){
        return 'there are no noises';
    }else if(object.noises.length === 0){
        return 'there are no noises';
    }else if(object.noises !== undefined){
        return object.noises.join(' ');
    }
    
    
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* here we check if a string has a particular word in it. We decided to 
* split the string, then loop through the array of substrings returning the first true result and 
* returning false if no match was found.
*/
function hasWord(string, word) {
    var arr = string.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(word === arr[i]){
            return true
        }
    }return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*here we're just adding a friend key/value pair into object
*/ 
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Here we are given a name and an object that contains a friends array.
* if the given name is in the friends array on object, we return true. Otherwise we return 
* false. First we had to account for some edge cases. If the friends key didn't exist on object
* we returned false. If the key value was not an empty array, we returned whether
* or not there was a match by using a loop.
*/
function isFriend(name, object) {
    if(object.friends === undefined){
        return false;
    }else if(object.friends.length > 0){
        for(let i = 0; i < object.friends.length; i++){
            if(name === object.friends[i]){
                return true;
            }
        }
    }return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* For this one we are given a name and an array of objects of people. Each
* person in the array has a friends list, which is also an array. First we 
* looped through the array of people objects and pushed all the names into an empty array called name array.
* then we used a nested loop to populate a second array called compare. 
* the array first tried to find a match between name and that object in the array. Then it found the array of friends and pushed
* that into the compare array as well as the given name. The final nested loop compares the names in compare and name array, for each name
* in i if it is found in j, it gets spliced out of the name array. he name aray is
* then returned with none of the friends in it, thus only the non friends.
*
*/
function nonFriends(name, array) {
  var compare = []
  var newArray = []
  var nameArray = [];
    for(let i = 0; i < array.length; i++){
        
        nameArray.push(array[i].name);
        console.log(nameArray)
    }
    for(let i = 0; i < array.length; i++){
        
        if(name === array[i].name){
          for(let j = 0; j < array[i].friends.length; j++){
           compare.push(array[i].friends[j]);}
           compare.push(name);
        }
    }console.log(compare)
    for(let i = 0; i < compare.length; i++){
      for(let j = 0; j < nameArray.length; j++){
        if(compare[i] === nameArray[j]){
           nameArray.splice(j, 1)
        }
      }
    }return nameArray 
}





var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
nonFriends('Jimmy', data)
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Here we received three parameters. We use simple dot notation to
* add a key/value pair to an object
*/
function updateObject(object, key, value) {
    
     object[key] = value;
     
     return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* basically here we got an object and an array of properties to delete from the object.
* We looped through the array and for each element at array[i] we deleted it from the object.
*/
function removeProperties(object, array) {
    for(let i = 0; i < array.length; i++){
        delete object[array[i]];
        
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*we were given an array. We loop through it. For every value we determine
* whether or not the value exists in our empty array called unique array. We did this with index of.
* Index of searches through unique array and returns 1 for the first match or -1 if no match is found.
* That way we say, if the element in array[i] === -1 when we run index of on unique aray, we add it to 
* the unique array.
*/
function dedup(array) {
    var uniqueArray = [];
        // Loop through array values
        for(let i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}