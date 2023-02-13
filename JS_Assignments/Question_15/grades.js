
// Enter marks obtained
const marks = 52;

if(marks >=80 && marks <=100){
    console.log("You have received Grade A"); // Marks between 80 to 100 are graded with A
} else if(marks >=70 && marks <=79){
    console.log("You have received Grade B"); // Marks between 70 to 79 are graded with B
} else if(marks >=60 && marks <=69){
    console.log("You have received Grade C"); // Marks between 60 to 69 are graded with C
} else if(marks >=50 && marks <=59){
    console.log("You have received Grade D"); // Marks between 50 to 59 are graded with D
} else {
    console.log("You have received Grade F"); // Marks below 50 are graded with F
}