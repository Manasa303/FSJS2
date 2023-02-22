// First Pattern
let n = 3; 
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// Second Pattern
let n1 = 3; 
let string1 = "";
for (let i = 0; i < n1; i++) {
  for (let j = 0; j <= n1-1; j++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string2);

// Third Pattern
let n2 = 3;
let string2 = "";

for (let i = 1; i <= n2; i++) {
  
  for (let j = 1; j <= n2 - i; j++) {
    string2 += " ";
  }
  
  for (let k = 0; k < 2 * i - 1; k++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);



