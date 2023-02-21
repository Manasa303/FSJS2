const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortages = ages.sort();
console.log(sortages);

const max = Math.max(...sortages); // To get max value in array
const min = Math.min(...sortages); // To get min value in array

console.log(max,min); // To console min and max values in an array

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


console.log(median); // To console median