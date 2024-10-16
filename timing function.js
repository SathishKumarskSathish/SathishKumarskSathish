// // timing function
// // js is a synchronous which means execude line by line  
// // if you compilor not having that much time means you can go for  setTiming function
// // 1st it will execude the synchronous function then execude the  asynchronous function  you have to give the timing also 
// // it wil execute only one time 
// console.log("good morning");
// console.log("good afternoon");

// setTimeout(()=>{
//     console.log("this is setTimeout");
    
// },400);
// console.log("good night");

// let hi=()=>{
//     console.log('this is fun');
    
// }
// setTimeout(hi,4000);  // 
// console.log();
// // setInterval()
// // it will also one callback function
// //it will execute the statement   again and again 
// let a=setInterval(()=>{
//     console.log("you are a developer");
    
// },1000)
// console.log(a);
// //clearInterval(a);
// let time=setTimeout(()=>{
//     clearInterval(a)
// },5000);

// clearTimeout(time);
//

// Foreach()
// forEach() method execude one by one  and printing 

let ar=["apple","orange","banana"];
let ar1=ar.forEach((a)=>{console.log(a)});
// it will upper or lower case also modification possible not change oraginal arrays
let arr2=ar.forEach((a)=>console.log(a.toUpperCase()));
// if you want to change for orginal array means use full syntax
//forEach(val,index,arr)
ar.forEach((val,index,ar)=>{
    ar[index]=val.toUpperCase()
})
console.log(ar);//(3) ['APPLE', 'ORANGE', 'BANANA']






