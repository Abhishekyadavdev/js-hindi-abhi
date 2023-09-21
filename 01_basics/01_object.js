const tinderuser = new Object()
 tinderuser.id ="123abc"
 tinderuser.name="sammy"
 tinderuser.isloggedin =false
// console.log(tinderuser);

const regularuser ={
    email: "asdf@gamil.com",
    fullname:{
        userfullname:{
firstname: 'abhishek',
lastname: "yadav"
        }
    }
}
console.log(regularuser.fullname.userfullname);
const obj1={1:"a", 2:"b"};
const obj2={ 3: "c",4:"d"}
//  const obej3=Object.assign({},obj1 ,obj2)
// const obj3={ obj1 ,obj2}
const obej3={...obj1,...obj2}
// console.log(obej3);
const user=[
    {
        id:1,
        email:"ay340608@gmail.com"
    },
    {

    },
    {

    }
]
user[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggedin'));
console.table(tinderuser);