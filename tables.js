console.log(" TABLE FOR 10 TO 15");
let input_table=Number(prompt("enter the table number for  10 to 15"));
switch(input_table){
    case 10:{
            let a11=16;
            for(var i=1;i<=10;i++){
            console.log(`${a11} X ${i} = ${a11*i}`);
            }
        break;
    }
    case 10:{
        let a0=10;
        for(var i=1;i<=10;i++){
            console.log(`${a0}X ${i} = ${a0*i}`);
        }

        break;
    }
    case 11:{
        let a1=11;
        for(var i=1;i<=10;i++){
            console.log(`${a1}X ${i} = ${a1*i}`);
        }
        break;
    }
    case 12:{
        let a2=12;
        for(var i=1;i<=10;i++){
            console.log(`${a2}X ${i} = ${a2*i}`);
        }
        break;
    }
    case 13:{
        let a3=13;
        for(var i=1;i<=10;i++){
            console.log(`${a3}X ${i} = ${a3*i}`);
        }
        break;
    }
    case 14:{
        let a4=14;
        for(var i=1;i<=10;i++){
            console.log(`${a4}X ${i} = ${a4*i}`);
        }
        break;
    }
    case 15:{
        let a5=15;
        for(var i=1;i<=10;i++){
            console.log(`${a5}X ${i} = ${a5*i}`);
        }
        break;
    }
    default:{
        console.log("invalid number ");
        console.log(" +++++++++++++++++++++++++++++++++++++++++++++++")
    }
}