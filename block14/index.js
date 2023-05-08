//Create an array of numbers;
//let every numbers in the array divide by 2; 
//if the remainder is 1, it is odd, put in a new array;
//Print the new array;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = [];
numbers.forEach(element => {
    element % 2 === 1 ? oddNumbers.push(element) : null;
});
console.log("Only Odds:  " + oddNumbers);

// Assgin an array of vowels: a, e, i, o, u;
// Define other lettters as consonants;
// Create a word;
// Check every letter in the word, if it is a vowel, count it; 
// If it is a consonant, count it;
// Print how many vowels and consonants in the word;

const vowels = ["a", "e", "i", "o", "u"];
let word = "javascriptloops";
let vowelsCount = 0;
let consonantsCount = 0;
for (let i = 0; i < word.length; i++) {
    vowels.includes(word[i]) ? vowelsCount++ : consonantsCount++;
}
console.log(word + " has " +consonantsCount + " conssontants and " + vowelsCount + " Vowels");

// Create an array of numbers;
// Create a new array;
// Put every number in the array to the new array in reverse order;
// Print the new array;

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reverseNumbers = [];
for (let i = numbers1.length - 1; i >= 0; i--) {
    reverseNumbers.push(numbers1[i]);
}
console.log("Reverse Numbers: " + reverseNumbers);

// Create a loop from 1 to 100;
// If the number is not divisible by 3 and 5, print "FizzBuzz"";
// If the number is divisible by 3, print "Fizz";
// If the number is divisible by 5, print "Buzz";
// If the number is not divisible by 3 or 5, print the number;

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

