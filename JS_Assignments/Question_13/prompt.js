const prompt = require("prompt-sync")({sigint:true});
const age = prompt('Enter your age:');

if (age != null && age >= 18) {
    console.log("You are old enough to drive");
} else {
    const num = 18 - age;
    console.log("Wait for " + num + " years to turn 18.");
    
}




