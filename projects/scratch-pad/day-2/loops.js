// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/*
I: Function takes an array 
O: Loop through array and print its values
C: N/A
E: N/A
*/

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/*
I: Function takes an array
O: Loop backwards over array and print its values
C: Has to be looped backwards
E: N/A
*/

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (let i = array.length - 1 ; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*
I: Function input object
O: Return an array cotaining the object keys
C: N/A
E: N/A
*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  return (Object.keys(object));
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/*
I: Function inputs an object
O: Loop over object and print its keys using console.log()
C: N/A
E: N/A
*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) {
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/*
I: Function inputs an object
O: Return an array containing the object's values
C: N/A
E: N/A
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  let values = [];
  for (let key in object){
      values.push(object[key]);
  }
  return values;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/*
I: Input is an object 
O: Loop over the Object and print its values using console.log().
C: N/A
E: N/A
*/

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (let key in object) {
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/*
I: Input is an object
O: Return the num of key/value pairs stored within the object
C: N/A
E: N/A
*/

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/*
I: Input is an object
O: Loop over object in reverse and print its values using console.log()
C: Has to be looped in reverse
E: N/A
*/

function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var myArray = [];
    for(var keys in object) {
        myArray.push(object[keys]);
    } 
    for(var i = myArray.length-1; i >= 0; i--) {
        console.log(myArray[i]); 
    }

  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
