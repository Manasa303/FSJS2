const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortages = ages.sort();
console.log("This array is sorted now" , sortages);

const max = Math.max(...sortages); // To get max value in array
const min = Math.min(...sortages); // To get min value in array

console.log("Tha maximum and minimum values in an array is" , max,min); // To console min and max values in an array

//declare median variable
let median;

//if else block to check for even or odd
if(sortages.length % 2 != 0){  // If the array length is odd
    let middleIndex = Math.floor(sortages.length/2); //find middle index
    median = sortages[middleIndex];  //find median
} else { // If the array length is even
    let middleIndex = Math.floor(sortages.length/2)  //find middle index
    median = (sortages[middleIndex] + sortages[middleIndex - 1])/2 //find median
}

console.log("Median age is" , median); // To console median


// To calculate average of an array by summing up all the numbers

const average = sortages.reduce((a, b) => a + b, 0) / sortages.length;

console.log("Average between the ages is" , average);

// To calculate the range of ages

const agerange = max - min;
console.log("Range between ages is" , agerange);


const absolute1 = Math.abs(min - average);
console.log("Absolute between minimum age and average is" , absolute1);

const absolute2 = Math.abs(max - average);
console.log("Absolute between maximum age and average is" , absolute2);