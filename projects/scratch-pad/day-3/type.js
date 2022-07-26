// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */

/*
I: Input is a value
O: Return true if the value is an array, false otherwise
C: N/A
E: N/A
*/

function isArray(value) {
    // YOUR CODE BELOW HERE //
    
   

   return Array.isArray(value); // true
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */

/*
I: Input is a value
O: Return true if the value is an object intended as a colllection, false if otherwise
C: N/A
E: N/A
*/

function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value) || value instanceof Date || value === null){
        return false;
      }else if(typeof value === 'object'){
       return true;
      
      }else{
          
          return false;
      }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

/*
I: Input is a value
O: Return true if is either an Array or an an Object intended as a collection, false if otherwise
C: N/A
E: N/A
*/

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (value === null || value instanceof Date){
        return false;
    
    }else if (typeof value === "object"){
    
        return true;
    }
    return false;


    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value)){
        return "array";
     }else if (value === null){
        return "null";
     }else if (value instanceof Date){
         return "date";
     }else {
            return typeof value;
        
     }   
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
