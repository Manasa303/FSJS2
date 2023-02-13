

//Enter month name
let month = "February";

//check which season, the month falls in.
if(month == "September" || month == "October" || month == "November" ) {
    console.log("It's Autumn");
} else if(month == "December" || month == "January" || month == "February" ) {
    console.log("It's Winter");
} else if(month == "March" || month == "April" || month == "May" ) {
    console.log("It's Spring");
} else if(month == "June" || month == "July" || month == "August" ) {
    console.log("It's Summer");
} else {
    console.log("Please enter valid input");
}