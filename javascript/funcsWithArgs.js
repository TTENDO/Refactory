//adding the numbers 30 + 60 + 100
function addNums(a,b,c){
    let total = a + b + c;
    console.log(`The total of a, b and c is `+total) ;//ends execution of function total
    return total;
}

//defining func avg using addNums with args
function avg(){
    let g = addNums(30,60,100)/3;
    console.log(`The average is `+g);

}
//defining the subtraction function
function sub(){
    let d = addNums(30,60,100)-10;
    console.log(`When u subtract 10 from total, u get `+d);
}

avg(); //invoking average function
sub();//invoking Subtract function


