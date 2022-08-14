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


/*
I: Function takes in a string
O: The string length
C: N/A
E: N/A
*/
function length(string) {
    // YOUR CODE BELOW HERE //
    return string.length;
    // return the length of the string


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
I: Function takes a string
O: The string is converted to lower case
C: Has to be lower case
E: N/A
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
return string.toLowerCase();
//returns the string in lower case


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I:Function takes in a string
O: Return a new string forced to uppercase
C: Has to be uppercase
E: N/A
*/

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

return string.toUpperCase();
// returns the string uppercase
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

/* 
I: Function takes in a string
O: The string is converted to dasecase
C: Has to have a dash in between string
E: What if the have spaces in between string
*/

function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    var re = / /gi;
    var newStr = string.replace(re, '-');
    // declare and assigned new string to replace spaces and seperate by dash
        return newStr.toLowerCase();
        // return the new string to lowercase

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

/*
I: Function takes a string and a single character
O: Return true if the beginning character match, false otherwise
C: The function is case sensitive
E:N/A
*/

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    return string[0].toUpperCase() === char.toUpperCase();
     // comparing if the beginning of string matches with char
    

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

/*
I: Function takes a string and single character
O: Return true if the end of the string match with the character, false otherwise
C: N/A
E: How can you ensure uppercase and lowercase can be compared equally?
*/

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
return string[string.length -1].toLowerCase() === char.toLowerCase();
// comparing if the end of string matches with char

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: Function takes two strings
O: Return the strings concatenated into one
C: N/A
E: N/A
*/

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

return stringOne + stringTwo;
// concatenated two strings together

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

/*
I: Function takes in any number of strings 
O: Return all strings joined together
C: N/A
E: N/A
*/

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
return args.join("");

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

/*
I: Function takes in two strings
O: Returns the longest of the two strings
C: N/A
E: N/A
*/

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {(stringOne.length < stringTwo.length) 
        return stringTwo;
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

/*
I: Function takes in two strings
O: return 1 if the first is higher in alphabetical order than
 the second, return -1 if the second is higher in alphabetical order than the
 first, and return 0 if they're equal.
C: N/A
E: N/A
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // if (stringOne > stringTwo){
    //     return -1;
    // }else if (stringTwo > stringOne){
    //      return 1;
    //  }else {
    //      return 0;
    //  }

    if (stringOne > stringTwo){
        return 1;
    }else if (stringTwo > stringOne){
         return -1;
     }else {
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

/*
I: Function takes in two strings 
O: Return 1 if the first is lower in alphabetical order than
 the second, return -1 if the second is lower in alphabetical order than the
 first, and return 0 if they're equal.
C: N/A
E: N/A
*/

function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // if (stringOne > stringTwo){
    //     return 1;
    // }else if (stringTwo > stringOne){
    //      return -1;
    //  }else {
    //      return 0;
    //  }



     if (stringOne > stringTwo){
        return -1;
    }else if (stringTwo > stringOne){
         return 1;
     }else {
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
