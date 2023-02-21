const countries = ["America" , "Australia" , "Ethiopia","Canada","India","Sweden","Japan"];

const country = "Ethiopia";
const countryExists = countries.includes(country);

if(countryExists){
    console.log(country.toUpperCase());
} else {
    countries.push(country);
    console.log(countries);
}