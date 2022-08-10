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
 animal.species = "Wolf";

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
noises[0] = "Howl";

//Using an array function add another noise to the end of `noises`.
noises.push("Pant");

// Adding an element at the beginning of the array
noises.unshift("Cry");

//Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
noises[3] = "Sniff";

//`console.log` the length of `noises`
console.log(noises.length);

//`console.log` the last element in `noises` again without hard coding the index.
console.log(noises.length);



//`console.log` the whole array.
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
//  2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
//  3. [ ] `console.log` `animal`.

// assign the `noises` property on `animal` to our new `noises` array
 animal.noises = noises;

//  Using any syntax add another noise to the `noises` property on `animal`.
noises[4] = "Growl";

// `console.log` the length of `noises`
console.log(animal);

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
// Create a variable named animals and assign it to an empty array.
var animals = [];

//push our animal that we created to animals. You should now see your first animal appear on your index.html page!
animals.push(animal);

//console.log animals. What does it look like?
console.log(animals);

//Create a variable called duck and assign it to the data:
var duck ={ 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] }

  // push duck to animals
  animals.push(duck);

  //console.log animals. 
  console.log(animals);

  //Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var parrot = {
  species: "bird",
  name: "Mal",
  noises: ["talk", "chrip"]
}

var dolphin = {
  species: "mammal",
  name: "Ecco",
  noises: ["click", "spit"]
}

animals.push(parrot);
animals.push(dolphin);

//`console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
// An array can hold a list of data
function getRandom (animals){
    for (var i = 0; i < animals.length; i++){
    return Math.floor(Math.random(animals.length));
    
}
}

friends.push(parrot["name"]);
animals[getRandom(animals)].friends = friends;
console.log(friends);


   
  


//Using a random index from this function that you just created, get a random animal and add its `name` to `friends`
friends.push(wolf["name"]);
animals[getRandom(animals)].friends = friends;
console.log(friends);
console.log(animals);

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