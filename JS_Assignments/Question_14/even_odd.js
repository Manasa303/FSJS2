
//Enter number
const prompt = require("prompt-sync")({sigint:true});
const number = prompt('Enter a number:');

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}