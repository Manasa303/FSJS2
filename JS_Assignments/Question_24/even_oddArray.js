const evenArray = [];
const oddArray = [];

let i;
let number = 100;

for (i=0;i<=number;i++)
{
    //check if the number is even
    if(i % 2 == 0) {
        evenArray.push(i);
    }

    // if the number is odd
    else {
        oddArray.push(i); 
    }
}
