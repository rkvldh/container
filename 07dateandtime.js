// date object

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString(), "to local string");
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());

// let myCretedDate = new Date(2023, 9, 3);
// let myCretedDate = new Date(2020, 9, 3, 5, 3);
// let myCretedDate = new Date("2020-9-3");
// let myCretedDate = new Date("9-23-2020");
// console.log(myCretedDate.toDateString());

// let myTimeStamp = new Date();
// console.log(myTimeStamp);

// console.log(myTimeStamp.getTime());
// console.log(Math.round(Date.now() / 100));

let newDate = new Date();
console.log(newDate.getFullYear(), "full year");
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);
// console.log(newDate.getMilliseconds());
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
// time is 03:10 minut
