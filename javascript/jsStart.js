/*//my first js example
//first variable
let num1 = 10
//second variable
var num_2 = 20
//capturing of the sum of two vars
let num3 = num1 + num_2
console.log(num3);*/

/*var a = 5;
var b = 2;
var c = a-b;
var d = a*b;
console.log(`This is the answer \t` +c);//\t is for horizontal space and \n is for go to next line
//console.log(d);


/*Context switching eg using + for addition and Concatenation */


/*Operators*/

/*let a = 10;b = 2;
//using the + addition
let c = a + b; 
console.log(`a + b = ` +c);
//using the * multiplication
let d = a*b;
console.log(`a * b = `+d);
//using the / divider
let e = a/b;
console.log(`a / b = `+e);
//using the - subtraction
let f = a-b;
console.log(`a - b = `+f);
//post increment
let z = c++;
console.log(` c++ = `+z);
//pre increment
let y = ++c;
console.log(`++c =`+y);
//post decrement
let v = f--;
console.log(` f-- = `+v);
//pre decrement
let x = --f;
console.log(`--f =`+x);
// the "+=2"
let q = c += 2;
console.log(`c +=2 =` +q);*/

//Modulus
/*let sum = 20;
let sub = 50;
let add = sum%sub;
console.log(`sum%sub = `+add);
let add2 = sub%sum;
console.log(`sub%sum = `+add2);*/


//&& Logical AND   || Logical OR

//==
var x = 5, x2 = '5';
var x3 = x == x2;
//===
var x44 = x === x2;

//func-group pf statements that perform a specific task
function addNums(){
    let num1 = 200;
    let num2 = 100;
    let num3 = num1 + num2;
    console.log("The num is ", num3);  //this returns the value but the value is not exposed to other functions.
    //exposing num3 to other functions
    return num3;
}

function subNums(){
    //using return value of addNums
    let diff = addNums() - 200;
    console.log("The difference is", diff);
}

//function invocation or function calling
addNums();
subNums();






