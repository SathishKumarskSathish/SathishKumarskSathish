let a=[45,34,32,32];
// 1.length            6.cancat()       11.reverse()
// 2..pop()            7.includes()     12.join()
// 3. .push()          8.Indexof()      13.slice()
// 4. .shift()         9.lastIndexof()  14.splice()
// 5. .unshift()       10.flat 

let b=["sunday","monday",`tuesday`,'wednesday',"thursday","friday",[1,2,3,4,5,6,7]];
console.log("this is array  :"+a);     //this is array  :45,34,32,32
console.log(a[0]);  // 45
//                                                                   length
console.log(a.length);// 4
console.log(b[2]);  //tuesday
console.log(a[9]);// undefined
console.log(b[6]); //[1, 2, 3, 4, 5, 6, 7]
console.log(a[a.length-1]);// 32   find the last element
console.log(a[a.length-2]); // 32   find the last before element



//   two dymention array


let c=[[1,2,3,4],[4,5,6],[7,8,9,10],[11,12,13,14]];
console.log(c[1][2]);  //   variable[ outer index ][inner index value]
console.log(c);// [1, 2, 3, 4, Array(3), Array(4), Array(4)]
console.log(c[0][3]);//4
console.log(c[3][2]);//13
console.log(c[2][0]);//7
console.log(c.push(34));//5                  push method it will  add the element last
                                                               // push method
console.log(c); //[Array(4), Array(3), Array(4), Array(4), 34]
console.log(c.pop());// 34  
//                                                      pop method          it will remove the last element
//                                                                       shift 
console.log(c.shift());//[1, 2, 3, 4]   it will remove the 1st element it will shift the element
//unshift
console.log(c.unshift([1,2,3,4]));//) [1, 2, 3, 4] it will add 1st position element
console.log(c); //4) [Array(4), Array(3), Array(4), Array(4)]
delete c[2];// use delete element it will remove not moving the index position
console.log(c) //[Array(4), Array(3), empty, Array(4)]
//splice 
c.splice(3,1); // to delete only one element  .splice( starting-index, how many element deleting values)
console.log(c); // [Array(4), Array(3), empty]

//                                                            .splice method 
//               u can remove and  replace also possible

var d=[1,2,4,2,5,6,7];
console.log(d.splice(0,1)); //1  removed 
console.log(d.splice(0,1));//2
console.log(d.splice(1,1,"sk"));
console.log(d);  //[ 4, 'sk', 5, 6, 7]  delete and replace the method
d.splice(0,2,"sathish","kumar");
console.log(d);  //['sathish', 'kumar', 5, 6, 7] first 2 element delete and replaced
d.splice(1,0,"hello"); //  
//  it is modify the original array                       splice(starting index,remove N-values,add-element)
console.log(d);//['sathish', 'hello', 'kumar', 5, 6, 7]  //adding also possible splice method
//  it is extract the element to the new array but not modify the original array                  slice 
console.log(d.slice(0,4));   //['sathish', 'hello', 'kumar', 5]
 // fetch or get  the element .slice(starting index,ending index)
console.log(d);
let spil=[34,55,66,66];
console.log(spil.splice(1,2));
console.log(spil.splice(1,0,"sathish"));
console.log(spil);





let e=[12,13,14,15,16];
//concat
let con=e+d;
console.log(con); //12,13,14,15,16sathish,hello,kumar,5,6,7
// concat 
console.log(d.concat(e));
let joined=[...d,...e]
console.log(joined);   //'sathish', 'hello', 'kumar', 5, 6, 7, 12, 13, 14, 15, 16]
//['sathish', 'hello', 'kumar', 5, 6, 7, 12, 13, 14, 15, 16]
// join            this method will convert array  to string
let str=e.join();
console.log(str); //12,13,14,15,16   convert string from
// .split          it will conver string to array
let str1="s,a,t,h,i,s,h"
let arr=str1.split(); //or str1.split(',')
console.log(arr);   //['s,a,t,h,i,s,h']
 
// flat   it wil merge to display only one arrary if you using nested means it add the element for single array
let ar=[12,23,45,67,[34,56,75,78,[45,77,34,33,76]]];
let flatArr=ar.flat(Infinity);
console.log(flatArr); //13) [12, 23, 45, 67, 34, 56, 75, 78, 45, 77, 34, 33, 76]
//                                                               reverse()
let arr6=[23,44,66,77,88];
console.log(arr6); //5) [23, 44, 66, 77, 88]
console.log(arr6.reverse());//5) [88, 77, 66, 44, 23]
console.log(arr6)// it will modify the orginal array 










 








