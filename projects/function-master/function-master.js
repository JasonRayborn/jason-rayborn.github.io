//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const { isArray, result } = require("lodash");

function objectValues(object) {
return Object.values(object);
}


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//Should take an object and return all its keys in a string each separated with a space
return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //Should take an object and return all its string values in a string each separated with a space"
    var values = [];
    for (var key in object) {
        if (typeof object[key] === "string") {// checks to see if object is equal to a string
            values.push(object[key]);
        }
    }
    return values.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //Should take one argument and return 'array' if its an array and 'object' if its an object
//    if (Array.isArray(collection)) {
//     return "array";
//    } else {
//     return "object";
//    }
return Array.isArray(collection) ? "array" : "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //Should take a string of one word, and return the word with its first letter capitalized
    var newStr = string[0].toUpperCase() + string.substring(1);
    return newStr;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //Should take a string of words and return a string with all the words capitalized
    var newString = string.split(" "); //split string 
    var arr = []; //assign a varibale to an empty array
    for (var i = 0; i < newString.length; i++) { //loop through the new string and push into the array
        arr.push(newString[i][0].toUpperCase() + newString[i].substring(1)); //combine rest of the string from index 1
    }
    return arr.join(" "); //join and return with spaces
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Should take an object with a name property and return 'Welcome <Name>!
var string = "Welcome " + capitalizeWord(object.name) + "!";
return string;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //Should take an object with a name an a species and return '<Name> is a <Species>'"
var string = capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
return string;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//Should take an object, if this object has a noises array return 
//them as a string separated by a space, if there are no noises return 'there are no noises
return arrayOrObject(object.noises) === "array" && object.noises.length > 1 ? object.noises.join(" ") : "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
return string.includes(word) ? true : false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //Should take a name and an object and add the name to the object's friends array then return the object
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    if (arrayOrObject(object.friends) === "array" && object.friends.includes(name)) {
        return true;
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
var results = []; // declare variable to an empty array
for (var i = 0; i < array.length; i ++) { // loop through array
    if (name !== array[i].name) { // checking if name is in array
        if (!array[i].friends.includes(name)) { // checking if its not an array and if it has name
            results.push(array[i].name); // push results to new empty array
        }
    }
}
return results; // return the results
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
    //If <key> does not exist on <object> create it."


    //returns a boolean indicating whether the object has the specified property as its own property
    if (!object.hasOwnProperty(key)) {  
        object[key] = value; // assigning object[key] to value
    } else {
        for (keys in object) { // looping through object
            if (keys === key) { //comparing if the results are the same
                object[keys] = value; // assigning object[keys] to value
            }
        }
    }
      return object; //return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //Should take an object and an array of strings. 
    //Should remove any properties on <object> that are listed in <array>"
    for (var i = 0; i < array.length; i++) { // loop through array
        for (key in object) { // loop through object
            if (array[i] === key) { // if array is equal to object
                delete object[key]; // delete the key
            }
        }
    }
     return object; // return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //Should take an array and return an array with all the duplicates removed"
    return [...new Set(array)]; // ...new Set() Use to remove duplicate elements from the array

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