// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }
// ***array length******
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("five is best number");
//   }
//   console.log(element);
// }
// console.log("element not allowd");
// **table*****
// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop value ${i}`);
//   for (let j = 0; j <= 10; j++) {
// console.log(`inner loop value ${j} and inner loop ${i}`);
// console.log(`${i} ${j} = ${i * j}`);
//   }
// }
// *********array loop*****
// let myArray = ["Flash", "Batman", "Superman"];
// console.log("myArrat length is ", myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }
// ************break***********
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`detected five 5`);
//     break;
//   }
//   console.log(`value of i is ${index}`);
// }
// *********continue********
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`detected five skip five`);
//     continue;
//   }
//   console.log(`value of i is ${index}`);
// }
// // 07:40 minut
// let map = new Map();
// map.set('IN', 'INDIA');
// map.set('USA', 'USA AMERICA');
// map.set('FR', 'FRANCE');
// map.set('PB', 'PUNJAB');
// // console.log(map);

// for (const [key, value] of map) {
//     console.log(key," : ", value);
    
// }
// es tarah se kaam nhi kar rah
// const myObject = {
//     'game1': 'mario',
//     'game2': 'contra',
//     'game3': 'super contra'
// }

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }
const myObject = {
    js: 'java script',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    console.log(myObject[key]);
    console.log(`${key} shortcut ${myObject[key]}`);
    
        
}



