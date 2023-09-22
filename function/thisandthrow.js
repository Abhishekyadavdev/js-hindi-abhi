const user ={
  username:  "abhishek",
  price: 99,

  welcomemessge:function(){
    console.log(`${this.username} ,welcome to website`);
    // console.log(this);
    // console.table(this);
  }
}
// user.welcomemessge()
// user.username="abhi"
// user.welcomemessge()
// console.log(this);
// function chai(){
//     let username="abhishek"
//     console.log(this.username);
// }
// chai()
const chai=()=>{
    let username="abhishek"
  console.log(this.username);
}
// chai()
const addtwo=(num1,num2)=>{
    return num1+num2 //explict
    // const addtwo=(num1,num2)=>(num1+num2) emplisit retun
}
console.log(addtwo(2,3));
