/*Functions*/

/*
Functions are a block code that provides specific instruction to perform a job. 
*Functions are made up of the word "function", function name, parenthesis, parameters which 
* are placeholders inside of the parenthesis, curly brackets (opening and closing),
* a return statement which is inside of the curly brackets (also know as the code
* block where the acutal code is run).
*/


/*Example*/ 
function print(name) {; //Created a function with the  key word "function" and giving the function a name
            // ^^^ The parameter of the function
console.log(name);//statement to be executed when the function is called 
}

print("Jase"); //Invoking (or calling) the function passing in a string in the argument
//prints "Jase" 

/*What’s the difference between a function’s parameters and arguments PASSED 
to a function?
*Parameters are placed holders(param1, param2). These go inside the parenthesis 
when creating a new function. Their value is unknown until we call the function.
*Arguments go inside the parenthesis when the function is called. These 
arguments can be the values from the variables that were declared or
they be literal data.
*/
function add(num1, num2)  {//<<< Function parameters are the names listed in the function's definition
  return num1 + num2;
}

add(5, 10); //Function arguments are the real values passed to the function
//15

/*What’s the syntax for a NAMED function?*/
function addNum(a,b){
    return a+b;
}
addNum (5,2); // returns 7//



/*How do we assign a function to a variable?*/
let sum = function() {

    
};




/*Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
How do we specify inputs, and how do we specify outputs?
*You can specify inputs by determining the number of your parameters. You can
specify outputs by the return keyword. This keyword determines what value
is returned when calling the function.
*/





/*Scope: Functions can see and modify variables in parent or global scopes. 
The inverse is NOT true.
*Any variable declared outside of a function belongs to the global scope, 
*and is therefore accessible from anywhere in your code. 
*Each function has its own scope, and any variable declared within that 
*function is only accessible from that function and any nested functions. *
*/

/* Example*/
var fullMoon = true;

//Initialize a gobal variable
let species = 'human';

if (fullMoon) {
  //Initialize a block-scoped variable
  let species = 'werewolf';
  console.log(`Its a full moon. Jase is currently a ${species}.`);
}
console.log(`It is not a full moon. Jase is currently a ${species}.`)

//output
/*It is a full moon. Jase is currently a werewolf.
It is not a full moon. Jase is currently a human.

The species variable has one value globally (human), and another 
value locally (werewolf). 
*/




/*Closures: Functions form closures around the data they house. 
*If an object returned from the Function and is held in memory 
*somewhere (referenced), that closure stays ALIVE, and data can continue to
*exist in these closures!  
*When functions in JavaScript execute, they use the same scope chain 
*that was in effect when they were created. This means that even after the outer
*function has returned, the inner function still has access to the outer 
*function’s variables. Therefore, you can call the inner function 
*later in your program. 
* For example:
*/

function multiplier(factor) {
  return function(x) {
    return x * factor; // multiplier returns a new function that uses factor that was passed in
  }
}


let doubler = multiplier(2);
doubler(4); //prints 8