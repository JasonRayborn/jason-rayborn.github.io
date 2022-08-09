/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. [ ] Open up the file data.js.
//  2. [ ] Create a variable named `animal` and assign it to an empty object.
//  3. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
//  4. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
//  5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
//  6. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
//  7. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
//  8. [ ] It should be something like: 
// ~~~JS
// { species: 'duck', name: 'Jennifer', noises: [] }
// ~~~

//declare a variable assign to an empty object
var animal = {};

// using dot notation, give animal a property name "species" with a value of the animal species
 animal.species = "Bat";

// Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal["name"] = "Morbius";

//Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];

//Print your `animal` Object to the console by adding, `console.log(animal)
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. [ ] Create a variable named `noises` and assign it to an empty array.
//  2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
//  3. [ ] Using an array function add another noise to the end of `noises`.
//  4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
//  5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
//  6. [ ] Add an element to `noises` using this function.
//  7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
//  8. [ ] `console.log` the length of `noises`
//  9. [ ] `console.log` the last element in `noises` again without hard coding the index.
//  10. [ ] `console.log` the whole array.
//  11. [ ] Does it look right?

//Create a variable named `noises` and assign it to an empty array.
var noises = [];

// Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises["Clicks"];

//Using an array function add another noise to the end of `noises`.
noises.push("Ping");

// Adding an element at the beginning of the array
noises.unshift("Fluttering");

//Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
noises[3] = "Chriping";

//`console.log` the length of `noises`
console.log(noises.length);

//`console.log` the last element in `noises` again without hard coding the index.
console.log(noises.length - 1);

//`console.log` the whole array.
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
//  2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
//  3. [ ] `console.log` `animal`.

// assign the `noises` property on `animal` to our new `noises` array
 animal[noises] = noises;

//  Using any syntax add another noise to the `noises` property on `animal`.
animal.noises = "Screech";


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}