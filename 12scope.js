// global and block scope

// let a = 10;
// const b = 20;
// var c = 30;

// console.log("let ",a);
// console.log('const ',b);
// console.log('var ',c);
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log('inner: ' a);
}

// console.log("let ",a);  // this block scope Let
// console.log('const ',b);  // this block scope Const
console.log('var ',c);   // var veribal global and block excuteble 