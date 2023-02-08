// To get current Year
const year = new Date();
console.log(year.getFullYear()); // To get year
console.log(year.getMonth()); // To get month
console.log(year.getDate()); // To get today's date
console.log(year.getDay()); // To get which day of a week
console.log(year.getHours()); // To get current time hour
console.log(year.getMinutes()); // To get current time mins

// Time Elapsed from JAn 1st 1970 to current date

let prevTime = new Date(1970,1,1,0,0);  // Jan 1, 1970
let thisTime = new Date();              // now
let diff = thisTime.getTime() - prevTime.getTime();   // now - Jan 1
console.log("Number of seconds elapsed is",(diff / (1000*60*60*24)));     // positive number of days
