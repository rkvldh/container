// for of, loop with array importent
// ["", "", ""]
// [{}, {}, {}]
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "superman"];

// for (const num of arr) {
//   console.log(num);
// }
// ****02*****
// const greetings = "Hello World";
// for (const greet of greetings) {
//   console.log(`each char is ${greet}`);
// }

// const coading = ['js', 'ruby', 'python', 'java', 'cpp', 'c#'];
// coading.forEach( function (val, index) {
//     console.log(val, index);
// } )
// *************************************
// const coading = ['js', 'ruby', 'python', 'java', 'cpp', 'c#'];
// function printme(item){
//     console.log(item);
// }
// coading.forEach(printme);

// coading.forEach( (item, index, arr) => {
// console.log(item, index, arr);
// } )
// ****************
// const myCoading = [
//     {
//         langName: "javascript",
//         langFile: "js"
//     },

//     {
//         langName: "python",
//         langFile: "py"
//     },

//     {
//         langName: "cpp",
//         langFile: "cpp"
//     },
// ]
// myCoading.forEach( (item) => {
// console.log(item.langName,'::',item.langFile);
// })
// 08:24 minut atart map and filter
// const coading = ['js', 'ruby', 'python', 'java', 'cpp', 'c#'];
// const values = coading.forEach( (item) => {
//     // console.log(item);
//     return item;
// })
// console.log(values);
// *********return values forEach***************
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num>4 )
// console.log(newNums);
// *******************2nd************
// const newNums = myNums.filter( (num) => {
//     return num>6;
// } )

// console.log(newNums);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = [];
myNums.forEach( (num) => {
    if (num > 4){
        newNum.push(num);
    }
} )

console.log(newNum);
// 08:34 minut