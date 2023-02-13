// To get current Year
const year = new Date();
console.log(year.getFullYear()); // To get year
console.log(year.getMonth()); // To get month
console.log(year.getDate()); // To get today's date
console.log(year.getDay()); // To get which day of a week
console.log(year.getHours()); // To get current time hour
console.log(year.getMinutes()); // To get current time mins

// Time Elapsed from JAn 1st 1970 to current date


console.log("Number of seconds elapsed is",Math.floor(Date.now() / 1000));  
