
const prompt = require("prompt-sync")({sigint:true});

let date = new Date();
let year = 2024;
let month = prompt('Enter a month:'); // Should be in number 
console.log(new Date(year, month,0).getDate());