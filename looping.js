//                          LOOPING  


console.log("count the number 1 to 10 ")
for(let i=0;i<10;i++){
   console.log(`number   :  ${ i}`);
}

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
console.log("count the number 10 to 1 ")
for(let i=10;i>=0;i--){
   console.log(`number   :  ${ i}`);
}
//  let a1=1;
//  while(a1<=10){
//    console.log("while loop using  "+a1);
//    a1++;
// }
console.log("*******************************************************");

// count the digit
let a2=23434,count1=0;
while(a2>0){
   a2/=10;
   count1++;

}
console.log(`number of count is ${count1}`);

//                     tables
let a3=8;
 for(var i=1;i<=10;i++){
   console.log(`8 X ${i} = ${a3*i}`);
 }
 



let val=1234,count=0;
console.log("good day");
while (val!=0){
    val=Math.floor(val/10);
    count++;  
}
console.log(count);
 while(val>0){
   let val1= Math.floor(val%10);
   if(val1%2==1){
    let sum =sum + val1;
    console.log(sum);
   }
   val/=10;
 }
 console.log("the end");
 //3.add only the even digits of a number

 //4.palindrome program in string
 let str1="malayalam",rev="";
 for(let i=str1.length-1;i>=0;i--){
    let ch=str1.charAt(i);
    rev=rev+ch;

 }
 console.log(rev);
 if(str1==rev){
    console.log("its is a palindrome");
 }
 else{
    console.log("not palindrome");
 }


