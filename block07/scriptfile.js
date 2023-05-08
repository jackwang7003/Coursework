/*
Pseudocode:
1. Show a string for user;
2. Assgin three variables;
3. The first variable is the result of "+", equals to 10;
4. The second variable is the result of "-"; equals to 40;
5. The third variable is the result of "*" , equals to 39;
6. Create a dialog box to show the vault codes.
*/
// create a string
const welcomeInformation = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
var firstCode = 2*5;
var secondCode = 60-20;
var thirdCode = 13*3;
alert(welcomeInformation);
confirm(firstCode +"-"+secondCode+"-"+thirdCode);
