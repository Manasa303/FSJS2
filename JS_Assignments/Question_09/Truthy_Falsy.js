// Truthy
if("iNueron" === "iNueron"){
    console.log("True");
} else {
    console.log("False");
}

if(10 > 2 && 2 === 2){
    console.log("True");
} else {
    console.log("False");
}

if(10 > 2 || 2 === "2"){
    console.log("True");
} else {
    console.log("False");
}



// Falsy

if(2 > 3){
    console.log("True");
} else {
    console.log("False");
}

if(10 < 2 || 2 === "2"){
    console.log("True");
} else {
    console.log("False");
}


// Condition
const age = 20;

if(age > 18){
    console.log('You are eligible to vote'); // True
} else if(age == 18) {
    console.log('You are eligible to vote'); // True
} else {
    console.log('You are not eligible to vote'); // False
}

// Condition
const marks = 34;

if(marks >= 80){
    console.log("You secured distinction in the exam");
} else if(marks >= 50 && marks <= 79){
    console.log("You secured first class in the exam");
} else if(marks >= 35 && marks <= 49){
    console.log("ou secured second class in the exam");
} else {
    console.log("You didn't pass in the exam");
}

