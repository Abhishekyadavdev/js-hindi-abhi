// primitive datatype

// 7 types: String,number,boolean,null,undefined,Symbol,BigInt
// non-primitive
// array ,objects,function,
// which type of language javascrift
// dynamicaly languge data type automatically assigned at the time
const score=100;
const scorevalue=100.3;
const isloggedIn= false;
const outsideTemp= null;
let userEmail;
const id =Symbol('123')
const anotherid= Symbol('123')
console.log(id===anotherid);
 const bignumber=12345678944562
const heros=["saktimAN","hero"];

    let myobj={
    name: "abhishek yadav",
    age:22
}
 const myfunction =function(){
    console.log("hello world");

}
console.log(typeof bignumber);
console.log(typeof myfunction);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//     //    Object  =>  object


// *******************************************
// Stack(primitvie),heap(non-primitive) memoery
let myname="abhishek yadav"
 anothername="chaiaurcode"
console.log(myname);
console.log(anothername);

let userone={
    email:"ay340608@gamil.com",
    upi:"user@ybl"
}
let usertwo=userone
usertwo.email="mr.abhishekyadav@gmail.com"
console.log(userone.email);
console.log(usertwo.email);
