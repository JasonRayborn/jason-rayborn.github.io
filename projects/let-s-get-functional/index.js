// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");
const { mapValues } = require('lodash');

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
 *    npm start --prefix ./jason-rayborn.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
   var males =_.filter(array, function(personObj) {
if (personObj["gender"] === "male") {
    return true;
} else {
    return false;
 }
  });
    return males.length;
}
    

var femaleCount = function(array) {
    return _.reduce(array, function(ladies, personObj) {
        if (personObj.gender === "female") {
            ladies++;
        }
        return ladies;

    },0);

    
};


var oldestCustomer = function(array) {
var oldObj;
oldestCustomer = _.reduce(array, function(perviousValue, currentValue) {
    if (perviousValue < currentValue.age) {
        perviousValue = currentValue.age;
        oldObj = currentValue;
    }
    return perviousValue;

},0);
return oldObj.name;
}

var youngestCustomer = function(array) {
    let youngest = 3000;
    let obj;
    _.each(array, function(personObj) {
        if(personObj.age < youngest) {
            youngest = personObj.age;
            obj = personObj;
        };
    })  
    //console.log(obj.name);
    return obj.name;
}
    
var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
