// Arrays

// const myArray = [0, 1, 2, 3, 4, 5];
// const myHeros = ["shaktiman", "nagraj"];
// console.log(myHeros.length);
// console.log(myArray);
// console.log(myArray[2]);
// //  Array Method
// myArray.push(6);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift(9);
// myArray.shift();
// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArr = myArray.join();
// console.log(newArr);
// slice ,splice
// console.log("A", myArray);
// const myn1 = myArray.slice(1, 3);
// console.log(myn1);
// console.log("B slice method not remove is orignal array", myArray);
// const myn2 = myArray.splice(1, 3);
// console.log("C with splice method remove is orignal array ", myArray);
// console.log('',myn2);
// // time 03:30 minut

// array inside array 
const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]);
// concat murge multi array in one array

//  const newHeros = marvel_heros.concat(dc_heros);
//  console.log(newHeros);

// const newSpreadHeros = ["first heros",...marvel_heros,...dc_heros,"Last heros"]
// console.log(newSpreadHeros);

const anotherArray = [1,2,3,[4,5,6],[7,8,9,[10,11,12]]];
console.log(anotherArray);
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array,'flat 1 array inside multi array is one array using flat method');
 
console.log('kya array hai',Array.isArray('ramesh'));
console.log('convert string to array',Array.from('rameah'));

console.log('not solve array return empty array',Array.from({name: 'ramesh'})); // intresting array method

// convert normal string ya number to array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
 





