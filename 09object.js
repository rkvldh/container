// singleton using constructer

// object litrsl  ,new empty object

const mySym = Symbol("key1") ;

const jsuser = {
    [mySym]: "mykey1",
    'full name': 'Ramesh Kumar',
    name: 'Ramesh',
    age: 44,
    weight: 62,
    locetion: 'punjab',
    email: 'abc@email.com',
    lastLoginDays: ['monday','suterday']

}; 

// jsuser.email = "ramesh@chat.com";
// Object.freeze(jsuser);
// jsuser.email = "kumar@gpt.com";

// console.log(jsuser.email);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.greeting = function(){
    console.log('hello js user');
}
console.log(jsuser.greeting())


jsuser.greeting2 = function(){
    console.log(`hello  ${this.name}`);
}
console.log(jsuser.greeting2())

// ***************part-2************** 4:03 minut