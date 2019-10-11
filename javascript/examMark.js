//checking the greater test mark
function checkTest(a,b){
let c = (a>b)?a:b;

console.log(`We considered `+c+'\t' +`as the test mark`);
return c;
}

//calculating final coursework mark by adding it with test
function coursework(d){
    let f = checkTest(70,50) + d;
    let g = f*(40/100);
    console.log(`Total coursework mark is \t`+g);
    return g;
}
//calculating final mark
function exam(h){
    let i = (coursework(40) + h )*(60/100);
    
    console.log(`Final exam mark is ` +i);
}


//invoking exam
exam(50);