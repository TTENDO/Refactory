/*
let abc = ()=>{} INSTEAD OF function abc(){}
let abc = (x,y,z)=>{} INSTEAD OF function abc(x,y,z){}
*/

let printName = (name)=>{
console.log('name is '+name);
}
printName('becky');


let num =(a,b) =>{
    let c = a+b;
    console.log(c);
}
num(2,5);