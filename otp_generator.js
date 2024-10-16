//                                otp generator  program 
let maths=Math.floor(Math.random()*1E4);
console.log("your otp is "+maths);
let input_otp=Number(prompt("enter the otp value   :"));

if(input_otp===maths){
    console.log("otp successfully"); 
}
else{
    console.log("try again");
}

let rand=Math.random()*10

