/*let num1 = 20; num2 = 40;
if(num1>num2){
    console.log("You have passed");
}
else{
    console.log("Heaven is not for you!");
}*/

//paye function takes someone's pay as a parameter and calculates the PAYE
/*let paye = (sal) =>{
    if (sal>=130000){
        let payeCharge = (30/100)*sal
        //console.log(payeCharge);
        return payeCharge;
    }
    else{
        //console.log("Please enjoy your salary wisely");
        return 0;
    }

      
}
//paye(250000);*/



/*create a function that compares the PAYE salary for two employees
by invoking the paye func
My version 


let greaterPaye = (salary1,salary2)=>{
    let a=paye(salary1);
    let b=paye(salary2);
    if (a>b){
        console.log('This has a greater paye which is '+a);
    }
    else{
        console.log(b);
    }
}

greaterPaye(500000,300000);*/
/* 
let compute=(sal1,sal2)=>{
    if (sal1>=130000 && sal2>=130000){
        let paye1 = sal1 * (30/100);
        let paye2 = sal2 * (30/100);
        let comp = (paye1>paye2?sal1:sal2)
        console.log('The highest taxable pay is '+comp);
    }
    else
    {
        console.log("One or both salaries are not taxable");
    }
}

compute(500000,500000);*/


//Using the else if
/*var mysal = 200;
var yoursal = 1000
if (mysal  > yoursal){
    console.log('mysal is greater than your sal')
}
else if(mysal<yoursal){
    console.log('My salary is less than your salary')
}*/


//Using a switch
/*
var sal = 20000;
switch(sal){
    case 2000:
        console.log('That is not 20000');
        break;
    case 200000:
        console.log('That is not 20000');
        break;
    default:
        console.log('20000 is the default value');
}*/

//printing odd numbers btn 0 and 5
/*
var num = 0
for (var num = 0; num  <=5;num++){
    
    if (num%2==1){
    console.log(num);}
}*/

//printing even numbers 

for (let a=0;a<=5;a++){
    var c = (a%2==0)?a:
    console.log(c)
}


//more loops
//for loop
for(var ab=0; ab = 5; ab++){
    console.log(ab);
}

//while loop
var ab=0
while(ab<=5){
    console.log(ab);
    ab++;
}

//do while
var ac=0;
do{
    console.log(ac);
    ac++;
}while(ac<=5);



