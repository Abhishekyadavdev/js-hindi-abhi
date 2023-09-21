function saymyname(){
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("k");
}
// saymyname()
function addtwonumber( num1, num2){
   let result= num1+num2
   return result
}
 const result =addtwonumber(3,4);
 console.log("the result value is :",result);

 function loginusermessge(username){
    if(username===undefined){
console.log("plese enter the username");
return
    }
    return `${username} just logged in`
 }
//   console.log(loginusermessge("abhishek"));
console.log(loginusermessge());