//higher order array method

// let ar=[1,2,3,5,6,6,7];
// console.log(ar);
// for(let i=0;i<ar.length;i++){
//     console.log(i,ar[i]);
// }
// //for-of loop
// // for(variable initialize  of array_name){

// // }
// // for of loop
// for(let v of ar){
//     console.log(v);//its is printing one by one 
//                     // for of loop printing without index
// }                   //better loop for of loop
// // for-in loop
// for(let a in ar){
//     console.log(ar[a]);
// }
// let o={
//     one:1,
//     two:2,
//     three:3
// }
// // for of  in object(thorw error)

// for(let key in o){
//     console.log(o[key]);
// }

// //
// function hi() {
//     console.log("this is higher ordr function");
// }

// let add=(a)=>{
//     a();

// }
// add(hi);


// let ar2=[45,343,54,33]
// ar2.forEach(()=>{

// })
// // forEach mean one of the higher order method
// // forEach it will take the element also index  
// // it will take 3 paramater 
// // syntax            forEach(element,index,array)

// ar2.forEach((va)=>{ // one method inside create  another function 
//     console.log(va);
    

// })

// ar2.forEach((ele, index, array)=>{console.log(index,ele,array)});

// //forEach drawback 
// let ar3=[];
// ar2.forEach((e)=>{
//     if(e>20){
//         ar3.push("1"+e);// or ar3.push(100+e);  //'145', '1343', '154', '133'
//     }
// })
// //input   45', '343', '54', '33' output: 145', '1343', '154', '133'

// console.log(ar3);//[45, 343, 54, 33]
// // filter method
// // its filter method is used to filter the contition 
// // no need to store and if contition
// let fil=ar2.filter((e)=>{
//     return e>20;
// })
// console.log(fil);//[45, 343, 54, 33]

// //map ()   method it  is having 3 paramater 
// //no need {} and retrun keyword also
// //mainly using traversing and any +,-,* use with all the elements 
// // 
// let mapedAr=ar3.map((ele)=>{
//     return ele+100
// })
// console.log(mapedAr);//['145100', '1343100', '154100', '133100']


// // elements who are >30 then 30 you have add 100 with them
// let addmap=ar2.map((ele)=>{
//     ele>30? ele+100:ele});  //

    
// let ar5=[1,20,40,50,60];
// let fi=ar5.filter((ele)=>{
//     return ar5>30;
// })
// let addEle=fi.map((ele)=>{
//     return fi+50;
// })
// console.log(addEle);

// //
// let ad=ar5.filter((ele)=>ele>30).map((ele)=> ele+50);// this is called method chaining
// console.log(ad);//[90, 100, 110]

// add the all the element in array
let adding=[1,2,3,4,5];
let  sum=0;
adding.forEach((v)=>
{
    sum=sum+v;
});
console.log(sum);
// map and reduce important
// reduce having 4 parameter
// reduce method is used to add the total array  and return the total 

let ad=adding.reduce((ac,ele)=>{
    return ac+ele
},100);
console.log(ad);//115 output is 15*100===> 15









