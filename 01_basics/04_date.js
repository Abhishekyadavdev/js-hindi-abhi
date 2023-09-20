// Date
// let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);
// let mycreatedate=new Date(2023,0,23, 5,3)
// let mycreatedate=new Date("2023-09-17")

// // console.log(mycreatedate.toLocaleDateString());

// let myTimeStam=Date.now()
// // console.log(myTimeStam);
// // console.log(mycreatedate.getTime());

// let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// // ${newDate.getDay()}
// newDate.toLocaleDateString('default',{
//     weekday:"long",
//     // timeZone:
// })
let today=new Date();
// console.log(today);
let date=new Date();
let Day=date.getDate();
let Month=date.getMonth()+1;
let year=date.getFullYear();
console.log("date is:"+Day+"/"+Month+"/"+year);
let h=today.getHours();
let m=today.getMinutes();
let s=today.getSeconds();
console.log(h+":"+m+":"+s);




