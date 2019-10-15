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

compute(500000,500000);