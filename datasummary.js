//primitve datatype these are call by value
// 7 types :string,number,boolean,null,undefined,symbol,Bigint
//example
const score = 100
const scorevalue=100.3
const isLoggedIn=false
let userEmail;
//symbol define
const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId)

const  bigNumber = 232323232323232323244342232n

//refrence type (Nonprimitive datatype)
//array,objects,functions
const hero=["kishan","saini","mayank"]
console.log(hero)
//object
const heros=["kishan","saini","mayank"];
const user = {
    name: "kishan",
    age: 23
};

console.log(user);
const myfunction = function (){
    console.log("hello world");
}

