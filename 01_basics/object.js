// singleton
// onject cerate
//object leiterals
const mysym=Symbol("key1")

const jsuser = {
    name:"abhishek ",
    "full name":"abhishek yadav",
    mysym:"mykey1",
    age:18,
    email:"Ay340608@gamil.com",
    isloggedin:false,
    lastloggeddays:['monday',"saturday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"])
console.log(jsuser["mysym"])
jsuser.email="abhishekyadav48@gmail.com"
// Object.freeze(jsuser)
jsuser.email ="abhishekyadav48@gmail.com"
// console.log(jsuser);
jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingtwo = function(){
    console.log(`hello jsuser,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
