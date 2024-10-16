// // promise is  an object represent the event completion (or failure)
// // its used to handle the  asynchronous operation
// // why you can give the condition true or false means its easy to working for asynchronous 
// //it is mostly used for api 
// it is having 2 parmater
//it has one callback function


// const b= new Promise((resolve,reject)=>{
//     let booksuccess=true;
//     if(booksuccess){
//         resolve(350)
//     }
//     else{
//         reject()
//     }

// });
// b.then(success).catch(failure);
// function success(v){
//     console.log(" thank you take it your ticket amount is "+ v);
// }
// function failure(v){
//     console.log(' ticket booking is faileure'+v);
// }
// //                   OR

// b.then(()=>console.log("successfully get the ticket")).catch(()=>console.log("ticket booking is failure"));




// function head_tail(){
//     return new Promise((res,rej)=>{
//         const rand=Math.floor(Math.random()*2);
//         if(rand==1){
//             res();
//         }
//         else{
//             rej();
//         }
//     })
// }

// head_tail().then(()=>console.log("head")).catch(()=>console.log("tail"));

// // DESTRUCTURE OBJECT  IN REACT JS 
// let ob={
//     id:1,
//     ph:1235454655,
//     name:"sathish",
//     age:111,
//     course:"webtech"
// }
// let obj={
//     id:1,
//     ph:1235454655,
//     name:"sathish",
//     age:111,
//     course:"webtech"
// }

// let ob1={name,age,course}=ob;
// console.log(ob1);
// let {a1,a2,a3,...a9}=ob;
// console.log(a9);
// console.log(a1);





//  let A=[1,2,34,55,66,77];
//  let [a,z,c,d,e,f]=A;
//  console.log(A);//[ 1, 2, 34, 55, 66, 77 ]
//  //rest-parameter

//  let [g,h,...i]= A;
//  console.log(h);//2
// console.log(i);//[ 34, 55, 66, 77 ]

// //spread oerator  cancat cant use react
// let aA=[1,2,3,4,5],Aa=[6,7,8,9,0];
// let aA1=[...aA,...Aa];
// console.log(aA1);

//   // spread operator cant use in object 
// let val1={...ob,...obj}
// console.log(val1);
let p1= new Promise((res,rej)=>{
    res(" you are selected");
    rej("you are rejected");


})


let p2= new Promise((res,rej)=>{
    res(" you are selected");
    rej("you are rejected");


})

let p3= new Promise((res,rej)=>{
    res(" you are selected");
    rej("you are rejected");


})


let p4= new Promise((res,rej)=>{
    //res(" you are selected");
    rej("you are rejected");
    


})
 // promise can be classified 4 methods
// promise.any()  
//only check the first preference only 
//
Promise.any([p1,p2,p3,p4]).then((data)=>{console.log(data)}).catch((er)=>{console.log(er)});
// promise.all()
// 
// this method will check all the promises 
// if any  things is rejected means its is executed rejected statement 
Promise.all([p1,p2,p3,p4]).then((data)=>console.log(data)).catch((err)=>console.log(err));
// allSettled()
// it is displayed both of reject and resolve also

Promise.allSettled([p1,p2,p3,p4]).then((data)=>console.log(data)).catch((ele)=>console.log(ele));
console.log(p1);
//

// promise.race()

Promise.race([p4,p2,p1,p3]).then((d)=>console.log(d)).catch((e)=>console.log(e))








