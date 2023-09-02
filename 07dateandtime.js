// date and time

// let myDate = new Date(); // date method new Date().toString();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let createdDate = new Date(2023, 8,23);
// let createdDate = new Date(2023, 8,23,5,3);
// let createdDate = new Date("2023-03-14");
// let createdDate = new Date("01-14-2023");
// console.log(createdDate.toDateString());

// let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());  // a pta nhi lga error kyon aaya
// console.log(Math.floor(Date.now()));

let newDate = new Date();
console.log(newDate.getFullYear()); // get year
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());

let nmonth = newDate.toLocaleDateString('default',{
    weekday: "long"
})
// 03:10 minut