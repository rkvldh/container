// var c = 12;
// c = 300;

// let a = 15;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log("inner ", b);
// }

// console.log(a); // not access out of scope
// console.log(b); // not access out of scope
// console.log(c); // access any where in scope and out scope
// 05:15 minut
// function inside function
// function one() {
//   const username = "hitesh";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   // console.log(website);
//   two();
// }
// one();

// if (true) {
//   const username = "ramesh ";
//   if (username === "ramesh ") {
//     const website = " youtube";
//     console.log(username + website);
//   }
// console.log(website);
// }
// console.log(username);

// ***************intrestin******************

console.log(addone(7));
function addone(num) {
  return num + 1;
}
// console.log(addone(7));
// addtwo(7);
const addtwo = function (num) {
  return num + 2;
};

console.log(addtwo(5));
// 05:29 minut
// ****************Arrow Functions**************
const user = {
  username: "ramesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`welcone to website ${this.username}`);
  },
};
// 05:33 minut end vedio
