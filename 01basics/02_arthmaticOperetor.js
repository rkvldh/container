// arthmaticmatic operetor

let num1 = 10;
let num2 = 15;

num1 = 3;
console.log(num1);


let sum = num1+num2;
let subtrect = num1 + num2;
let multiply = num1 + num2;
let divide = num1 + num2;
let reminder =  (num2 % 2 == 0  );

console.log("sum of two number", sum);
console.log("subtrect of number",subtrect);
console.log("multiply of  number",multiply);
console.log("divide of number",divide);
console.log(reminder);
// console.log(10 += 1);

console.log(num1 >= 120);
console.log(num2 <= 16);
// console.log(num2 =+ num1);
console.log(10 === 10);

let andOpretor = num1 && num2;
let orOperetor = num1 || num2;
let notOperetor = num1 -= num2;
console.log('and operetor',andOpretor);  
console.log('or operetor',orOperetor);
console.log('not operetor', notOperetor);

let age = 15;
let greaterthen = age > 16 ? "milk" : "coffee";
let lessThen = age < 16 ? "milk" : "cofee";
let graterThenEqual = age >= 16 ? "milk" : "coffee";
let lessThenEqual = age >= 16 ? "coffee" : "milk";
let negPos = age >= 12 ? '1' : '-1';

console.log('greater then', greaterthen);
console.log('less then', lessThen);
console.log('Grater Then Equal to', graterThenEqual);
console.log('Less Then Equal to', lessThenEqual);
console.log('negetiv and positiv number using ternery operetor', negPos);