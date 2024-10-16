// proto type
// this keyword means it will return the current object state 
//if you use normal function means
//  this  keyword it will return window object
// it we write affow function means it will return window function 


    //  let a=[7,5,3,23,77,9]
    //  a.sort((a,b)=>{
    //     return a-b;
    //  });
    //  a.sort({},b)
     

let bike={
    bike_name:"bike",
    color:"red",
    brand:"rx100",
    working: function(){
    console.log(this);
}
}

console.log(bike);
console.log(bike.working);


let car={
    car_name:"bmw",
    color:"white",
    work:function (){
        console.log(this);
    }
   
}
let car1={
    car1:"car",
    __proto__:bike
}
console.log(car1);




let display=()=>{
    console.log(this);   // it will return one window object
    
}
display();
function fun(){
    console.log(this);
}
fun();
//

// it having 3 methods
//1. call() 2.apply()  3. bind()
//call()

let obj={
    fname:"sk",
    lname:"dk",
    age:11
}
let display1=function(run,friends){

}
// display1()

