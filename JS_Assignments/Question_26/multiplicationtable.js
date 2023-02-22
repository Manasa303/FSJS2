// program to generate a multiplication table

// take input from the user
const prompt = require("prompt-sync")({sigint:true});
const number = prompt('Enter a number:');

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}