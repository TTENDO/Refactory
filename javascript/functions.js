//adding the numbers 30 + 60 + 100
function addNums(){
    let a =30;b = 60; c = 100;
    let total = a + b + c;
    console.log("Total is \t"+total);
    return total;//ends execution of function total
}

//multiplying addNums by 2
function multiply(){
    let mult = addNums() * 2;
    console.log(`function 1 * 2 = \t`+mult);
    return mult;
}

//dividing multiply by 15 to get the modulus
function divide(){
    let div = multiply()%15;
    console.log(`modulus is \t`+div);
}


divide();