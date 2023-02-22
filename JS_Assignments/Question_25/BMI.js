function calculateBMI(weight,height){
    let bmi = (weight / Math.pow( (height/100), 2 ));
    console.log(Math.round(bmi));

    if(bmi < 18.5){
        console.log("You are Underweight");
    } else if(bmi >= 18.5 && bmi <= 24.9){
        console.log("You are Normalweight");
    } else if(bmi >= 25 && bmi <= 29.9 ){
        console.log("You are Overweight");
    } else {
        console.log("You are Obese");
    }
}



const prompt = require("prompt-sync")({sigint:true});
const w = parseInt(prompt("Enter your weight in kg: "));
const h = parseInt(prompt("Enter your height in metres: "));

calculateBMI(w,h);