// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-maxwellboecker");

// npm start --prefix ./projects/let-s-get-functional


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //I: array
    //O: number
    let filterOutput = _.filter(array, function(customerObj){
        //filter out all of the male customers
        return customerObj.gender === 'male';
    });
    return filterOutput.length;
};

var femaleCount = function(array){
    //I: array of customer objects
    //O: number of female customers
    return _.reduce(array, function(prev, current){
        //when to increment our seed
            //if our customer object has a gender of female
            if(current.gender === 'female'){
                prev += 1; // assign it to itself plus one
            }
        //when to not increment our seed
            //if our customer object's gender is not female
            return prev; //to use as seed
    }, 0)
}

var oldestCustomer = function(array){
    // find the oldest customer's name
    //I: array of objects
    //O: string of customer name
    /* Here, as in youngest customer, reduce would have been a logical choice. But we proceeded with a simple for loop inside of which
    * a conditional specified to assign array[0] to results, creating a seed of sorts. Every subsequent array[i] object was compared by its age property
    * to the age property of the object in the results variable, being assigned to results if its age property was found to be of lower numerical value. 
    * We then returned the string at results['name'].
    */
    var results
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            results = array[0]
        }else if(results.age < array[i]['age']){
            results = array[i];
        }
    }return results['name'];
}

var youngestCustomer = function(array){
    //I: array
    //O: string
    /* The main problem we had here was being able to start with something we were able to compare to the rest of the customer objects. Reduce would
    * have been a logical choice but we were having trouble with it at the time. So we created a for loop inside of which we created a conditional
    * which basically did the result of providing a seed. If i = 0, basically just assign array[i] to seed. The comparison followed where if results.age
    * was greater than array[i].age we reassigned results to array[i], finally returning results.
    */
    var results
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            results = array[0];
        }else if(results.age > array[i]['age']){
            results = array[i];
        }
    }return results['name'];
}


var averageBalance = function(array) {
    //find the average balance of all customers
    //I: array
    //O: number
    //declare an empty array to push balance key values into
    var balancesArray = [];
    //loop over objects in array
    for (let i = 0; i < array.length; i++){
        //declare a variable to grab current element balance, cut the $ off with substring
        var currentBalance = array[i]['balance'];
        balancesArray.push(parseFloat(currentBalance.substring(1, currentBalance.length).replace(",",""))); //push all values from balance keys in new array
    }
    
    
    
    var sum = _.reduce(balancesArray, ((a, b) => (a + b)), 0)
    //add numbers together to get a total
    var average = sum/balancesArray.length
    return average;
    //divide the total by the length of the new array
};

var firstLetterCount = function(array, letter){
    //I: array, letter
    //O: number
    //E: uppercase/lowercase
    /* I used a for loop here to access each customer object. I then compared the customer name at index 0 with the given letter. If 
    * it returned a match, then count was incremented. At the end count was returned to reflect how many of the customers had names beginning with the given letter.
    */
    var count = 0;
    var lett = letter.toUpperCase();
    for(let i = 0; i < array.length; i++){
        if(array[i]['name'][0] === lett){
            count++
        }
    }return count;
}
    
var friendFirstLetterCount = function(array, customer, letter){
    //I: array, customer, letter
    //O: number
    //E: lowercase, uppercase
    /* For this one we needed to access a given customer's friends object to see how many friends they had with a name starting with the
    * given letter. I figured the nested loop was a natural choice, given the nature of the problem being access of two arrays, one of which nested 
    * somewhere within the other. When the appropriate customer object was found the nested for loop was initiated to search the friends array, comparing
    * each name with the given letter, which had been brought to uppercase at the beginning of the function to avoid any unpleasant edge cases, and incrementing
    * count if the name began with the given letter.
    */
    var lett = letter.toUpperCase();
    var count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i]['name'] === customer){
           for(let j = 0; j < array[i]['friends'].length; j++){
               if(array[i]['friends'][j]['name'][0] === lett){
                   count++;
               }
           } 
        }
    } return count;
}
    
var friendsCount = function(array, name){
    //I: array, name
    //O: an array of the customers who are friends with the person given as the name argument
    /* For this one I used a nested for loop to see if i could find name amongst any of the friends in a given customer's 
    * friends array. This required me to first loop through the array of objects, then through the array of friend objects, pushing
    * the customer at array[i] into friendsArray if they had name amongst their friends.
    */
    var friendsArray = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i]['friends'].length; j++){
            if(array[i]['friends'][j]['name'] === name){
                friendsArray.push(array[i]['name']);
            }
        }
    }return friendsArray;
}



var topThreeTags = function(array){
    //I: an array
    //O: an array of the top 3 tags
    /* This required many steps. First to produce an array of all the tags in all the customer objects represented as strings. Then to create an object
    * to store the information produced by running the reduce function on tagsArray. Reduce found each tag and how many times it appeared and stored that 
    * info as a key value pair in accObj. Then, the key/value pairs had to be pushed into an array as sub arrays containing key at index 0 and number at index 1.
    * we then sorted based on the value at array[1] to bring the most occurring keys to the indexes 0, 1, 2. Then we mapped that array to a new array which contained
    * only the tags as string values. Then we sliced that off to create an array of just the top three. this was the array we returned.
    */
    
    var tagsArray = [];
    //using a nested for loop to get all the arrays of all the tags into one array of tag strings
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i]['tags'].length; j++){
            tagsArray.push(array[i]['tags'][j])
        }
    }
    //console.log(tagsArray);
    //using reduce to move through tagsArray and create a new key for each tag with a value, and to  increment the value if there already exists a key
    let tagsObj = _.reduce(tagsArray, function(accObj, tag){
        if(accObj[tag] !== undefined){
            accObj[tag] ++;
        }else{
            accObj[tag] = 1;
        }
        return accObj;
    }, {});
    
    //console.log(tagsObj);
    var newTagsArray = [];
    // creating an array of arrays representing the information in the key/value pairs of tagsObj so that we may use the sort method
    for(var key in tagsObj){
        newTagsArray.push([key, tagsObj[key]]);
    }
    //console.log(newTagsArray);
    // now sorting the arrays inside newTagsArray to bring the highest values at their index to the front of the newTagsArray (the 0,1, 2 indexes)
    
    newTagsArray.sort((a, b) => (b[1] - a[1]));
    //console.log(newTagsArray);
    
    //mapping the newTagsArray to newTags keeping only the name of the tag
    
    let newTags = _.map(newTagsArray, a => a[0]);
    
    //slicing the newTags array to keep only the first three elements. assigning it to topTags, which will be returned.
    let topTags = newTags.slice(0, 3);
    
    return topTags;
}


var genderCount = function(array){
    //I: array
    //O: object with three keys, one for each gender and one for the count
    //C: use reduce
    /* When i was grasping this problem it seemed that solving it would require only the first couple same steps from above. First I created an
    * array of all genders founf in the customer objects. Then, with reduce, I created an object with key/value pairs that featured the gender as key and 
    * number of occurrences as value. Since the output was object, I was able to return this directly out of the function.
    */
   let genderArray = [];
   for(let i = 0; i < array.length; i++){
       genderArray.push(array[i]['gender']);
   }//console.log(genderArray);
    
    //using reduce to create a new object with each key being a gender and each value being a total number of customers with that gender
    let genderCount = _.reduce(genderArray, function(accObj, gender){
        if(accObj[gender]){
            accObj[gender] ++;
        }else{
            accObj[gender] = 1;
        }return accObj;
    }, {});
    //console.log(genderCount);
    //returns the genderCount array
    return genderCount;
    
}












//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
