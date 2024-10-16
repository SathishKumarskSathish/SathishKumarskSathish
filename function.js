 //                                       function 
 //                              no argument function
let val1=90,val2=66;
 function  fun1(){
    console.log(`adding  value  ${val1} and ${val2}:   ${val1+val2}`);
 }
 fun1();



 //                             parameterized function
 function add(a,b){
    console.log("adding the to number is  :"+a+" and "+b+"result will be "+(a+b));
 }
 add(56,44);
 //        task                 find  prime number
function prime(v1 ){
    let count=0;
     for(let i=1;i<=v1;i++){
        if(v1%i==0){
            count++;
        }
    
     }
     if(count>2){
        console.log("not prime number  :"+v1);
    }
    else{
        console.log("this is prime number  :"+v1);
    }



}
console.log("********************************************************");
prime(4);
//                              odd or even  from   number range 
function find_range_odd_even(v2){
    for(let i=1;i<=v2;i++){
        if(i%2==0){
            console.log("this is even number:"+i);
        }
        else{
            console.log("odd number   :"+i);
        }
    }
}
find_range_odd_even(10);
console.log("********************************************************");
//                                  odd and even number
function odd_even(v3){
   
        if(v3%2==0){
            console.log("this is even number:"+v3);
        }
        else{
            console.log("odd number   :"+v3);
        }
}
odd_even(10);
console.log("********************************************************");

           //                    function with return value

function sub(a,b)
{
    let c = a - b 
    return c
}
 let result = sub(36,15)
 console.log(result);

//                                 find greater value of 3 value
function greater_value(a,b,c){
    if(a>b && a>c){
        console.log(`${a} value is greater`);
    }
    else if(b>c){
        console.log(`${b} value is greater`);
    }
    else{
        console.log(`${c} value is greater`);
    }
    
}
let result1= sub(67,34)
console.log(result1)

 greater_value(34,55,66);
 //                                        natural number

 function natural_number(n){
    let ans=(n*(n-1)/2);
    console.log("solution is "+ans);
 }
 natural_number(10);

 //                                       fibonocii series
  function fibo(n){
    let b=-1,c=0,d=1;
    for(let i=0;i<n;i++){
        d=b+c;
        console.log(d);
        d=b;
        b=c;
        
    }

  }
  fibo(10);

  //                                                                 anonymous function 
   // anonymous function means it not having any name   or function with expreccsion
     let ano=function (a,b){
        console.log("this is anonymous function");
        console.log(a-b);
    }
    ano(23,45);

    //                                                          arrow   function =>
//  without function keyword using is possible for aro function
    //  the advantage of arrow function no need to use{} and return keyword
    // if you write multiple line of code you can do the {} use 
     let arrow= (a,b)=>{
        console.log("this is  => aero function ");
        return a*b;
     }
     let ans=arrow(4,5);
     console.log(ans);//20

     
     let arr=( a,b)=> console.log("hi");
    
     arr(45,33);
     console.log(arr);
//                       nested function and lexical scopping 
  
// var is a global variable it can access anywhere
// let and const are local variable if you specify inside block only applicable for inside only
   
var a=20;
var value=90;
let outer=()=>{
    var b=30;
    let inner =()=>{
        var c =89;
        console.log(a+b+c);
    }
    // console.log(c);  
//c is not defined
    inner()
}
outer()
// output   139
 //                             swap the two number 
  //                    type-1
function swap(a,b){
    console.log(a,b);
     a=a+b;
     b=a-b;
     a=a-b;
     console.log(a,b);
}
swap(10,20);
//                         type - 2
function swap1(a,b){
    console.log(a,b);
     a=a*b;
     b=a/b;
     a=a/b;
     console.log(a,b);
}
swap1(20,30);
let v1=30,v2=40;
console.log(`${v1}   ${v2}`);  //30   40
 v1=v1+v2-(v2=v1) // single line swaping method 
//  v1=30+40-30  ---> v1=20
console.log(v1+"     "+v2);  //40  30 



//  function                                                      Higher order function
// one function call another function  higher order  function
let func=(a)=>{   
    console.log("this is heigher  order fuction");
    swap1(22,34); // function call 

}
func(swap1)  // you can use callfunction 

let abc=()=>{
    console.log("this is a one function ");
}


let heigher_order_fun=( h)=>{   
    console.log("this is higher order function ");
        h();  // both are same output  it is str
        abc();   // abc function your calling so it will execude the program inside another

}

heigher_order_fun(abc)

let add1=(a,b)=>{
    console.log(a+b);
}
let sub1=(a,b)=>{
    console.log(a-b);
}
let mul=(a,b)=>{
    console.log(a*b);
}

let heigher=( a,b,store)=>{
    console.log("heigher ");
    // console.log(a,b);
    store(a,b);
    // add1(20,30);

    return store(a,b);


}
 
heigher(20,30,add1);
heigher(30,30,sub1);
heigher(20,50,mul);


// iife(immediate invoke function expression)  its using mostly api

(function (){
    console.log("this is iife function");
})();

// let str="AABCASDS";
// console.log(str);
// for(let i=0;i<str.length;i++){
//     for(let j=i+1;j<str.length;j++){
//         if(str[i]==str[j]){
            
//             str[j]=-1;

//         }
//         if(str[i]!==-1){
//             console.log(str[i])
//         }
//     }
// }
// function duplicate(){

// }


/// how to reverse the string into array and convert reverse or not
// let str="hello"
// let arr=str.split()
// let revArr=arr.reverse()
// let reverStr=revArr.join()

let srt="malayalam";
let ar1=srt.split("").reverse().join("");
console.log(ar1);
if(srt==ar1){
    console.log("this is palindrome");
}
else{
    console.log("not a palindrome");

}






 
 



