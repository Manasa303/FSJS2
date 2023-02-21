
const prompt = require("prompt-sync")({sigint:true});

let date = new Date();
let year = prompt('Enter a year:'); // should be in numbers
let month = prompt('Enter a month:'); // should be in numbers
console.log(new Date(year, month,0).getDate());