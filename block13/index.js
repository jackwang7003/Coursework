//get a vaule from the user through the prompt
//assgin a value to the variable
//if the variable is true, then print true
//else 
   //if the variable is boolean, print The boolean value false is falsy
    // else if the variable is null, print The null value is falsy
     //else if the variable is undefined, print The undefined value is falsy
      //else if the variable is 0, print The number 0 is falsy(the only falsy number)
     //else if the variable is a string, print The empty string is falsy(the only falsy string)

var prompt = require("prompt-sync")();
var variable = prompt("Enter a value: ");
var value;
if (variable === "0") { value = 0; }
else if (variable === "null") { value = null; }
else if (variable === "undefined") { value = undefined; }
else if (variable === "false") { value = false; }
else if (variable === "true") { value = true; }
else { value = variable; }

if (value) {
    console.log("true");
} else {
    if (typeof value === "boolean") {
        console.log("The boolean value false is falsy");
    } else if (value === null) {
        console.log("The null value is falsy");
    } else if (typeof value === "undefined") {
        console.log("The undefined value is falsy");
    } else if (typeof value === "number") {
        console.log("The number 0 is falsy");
    } else if (typeof value === "string") {
        console.log("The empty string is falsy");
    }
}

// assgin a number value to the variable1;
// assgin a number value to the variable2;
// assgin sum of variable1 and variable2 to the sum;
// if the sum is less than -1000, print The sum is less than -1000;
// else if the sum is between -1000 and 0, print The sum is a negative number;
// else if the sum is 0, print The sum is equal to 0;
// else if the sum is between 0 and 100, print The sum lager than 0;
// else if the sum is greater than 100, print The sum is greater than 100;

var variable1 = -1;
var variable2 = -2;
var sum = variable1 + variable2;
if (sum < -1000) {console.log(sum + " is less than -1000");}
else if (sum < 0) {console.log(sum + " is a negative number");}
else if (sum === 0) {console.log(sum + " is equal to 0");}
else if (sum <= 100) {console.log(sum + " lager than 0");}
else if (sum > 100) {console.log(sum + " is greater than 100");}

// assgin a number value to the variable1;
// assgin a number value to the variable2;
// if the variable1 is not less than 5 and variable 2 is not less than 5, print true;
// else print false;

if (!(variable1 < 5) && !(variable2 < 5)) {console.log("true");}
else {console.log("false");}

//Assgin the result of compare parameter1a and parameter1b to boolean1;
//Assgin the result  of compare parameter2a and parameter2b to boolean2;
//if boolean1 is true or boolean2 is true, print true;
//else print false;

const parameter1a = 1;
const parameter1b = "1";
const parameter2a = "two";
const parameter2b = 2;
const boolean1 = parameter1a === parameter1b;
const boolean2 = parameter2a === parameter2b;
if (boolean1 || boolean2) {console.log("true");}
else {console.log("false");}