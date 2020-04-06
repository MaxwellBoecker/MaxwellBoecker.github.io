// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
/*all I'm doing here is making the function return the three arguments
* as values in an object literal which correspond to three pre-determined keys
*/
function makeContact(id, nameFirst, nameLast) {
    return {
        "id": id, 
        "nameFirst": nameFirst, 
        "nameLast": nameLast
        
    };
    
} 


function makeContactList() {
    /* 0. addContact
    * for this I need to write a function that takes a complete contact object and pushes it into the array of contacts
    * Input: 1 argument, Output: the argument pushed to the contacts array
    *
    * 1. findContact
    * Input: fullName, Output: if fullName matches both contacts[i].nameFirst and contacts[i].nameLast, return the contact object stored at contacts[i]
    * Because the values for nameFirst and nameLast are stored at different keys, I can only compare one piece of data at a time with the given input fullName, which contains
    * both pieces of information. Thus, I have to split the input fullName into its first name and last name components so that it may be compared with the values stored
    * at keys nameFirst and nameLast simultaneously
    *
    * 2. Remove Contact
    * Input: contact object, Output: removes the input contact from the array of contacts, constraints: using the splice method to remove an element from an array at a specific index
    * first I will use a for loop to cycle through the array. Inside the loop is a conditional. If, while cycling, the loop finds an object in contacts that directly matches
    * the input object, it removes that object from the array of contacts
    */
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, addContact: function(contact) {
            contacts.push(contact);
        }, findContact: function(fullName){
            
            for(let i = 0; i <= contacts.length -1; i++){
              var splitArray = fullName.split(' ')
              if (contacts[i].nameFirst === splitArray[0] && contacts[i].nameLast === splitArray[1]){
                  return contacts[i];
              }
            }
        }, removeContact: function(contact){
            for(let i = 0; i <= contacts.length -1; i ++){
                if(contact === contacts[i]){
                    contacts.splice([i], 1);
                }
            }
        }, printAllContactNames: function(){
            var contactArray = [];
            for(let i = 0; i <= contacts.length -1; i++){
                var newString = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                contactArray.push(newString);
                
            }var arrayString = contactArray.toString();
            var contactString = arrayString.split(',').join('\n');
            return contactString
        }
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
