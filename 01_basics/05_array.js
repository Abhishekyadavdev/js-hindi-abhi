// array
// const myarr=[0,1,2,3,4,5]
// const name=["ad","asdf"]
// const myarr2=new Array(1,2,3,4,5)
// console.log(myarr[0]);
// // array method
// myarr.push(6)
// myarr.push(7)
// console.log(myarr);
// myarr.pop()
// console.log(myarr);
// myarr.unshift(8)
// // myarr.shift()
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));
// console.log(myarr);
// const newarr=myarr.join("*")
// console.log(newarr);
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// console.log(fruits.sort());




// slice ,splice
// console.log(("a",myarr));
// const myn1=myarr.slice(1,3)
// console.log(myn1);
// console.log(("b",myarr));

// const nam =['a','b','b']
// const name=['av','an','ak']
// nam.push(name)
// console.log(nam);

//  const all =nam.concat(name)
// console.log(all);

const marvles_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvles_heros.push(dc)
// console.log(marvles_heros);
// console.log(marvles_heros[3][1]);
  const all= marvles_heros.concat(dc)
console.log(all);
const hero=[...marvles_heros, ...dc]
console.log(hero);
const another=[1,2,3[4,5,6],7,[6,7[4,5]]]
const real_another=another.flat(5)
console.log(real_another);
console.log(Array.isArray("abhishek"));
console.log(Array.from("abhishek"));
console.log(Array.from({name:"abhishek"}));
let score=100
let score1=200;
let score3=300;
console.log(Array.of(score,score1,score3));