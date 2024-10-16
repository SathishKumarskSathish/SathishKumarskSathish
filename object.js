 //            1st way of creation(static way)
// access the . Dot notation
let phone={
    color:"blue",
    brand:"mi",
    ram:5,
    storage:64,
    price: 15000,
    categories : ['electronics','charger'],
    phone1:{ color: "black",brand: "redmi"}
}//                  color: 'blue', brand: 'mi', ram: 5, storage: 64, price
console.table(phone);
console.log(phone);
console.log(phone.color);//blue
console.log(phone.ram);//5
console.log(phone.categories[1]);//charger

//2nd way of creation  (dynamic way)
// access  object creation

let car=new Object();
car.name="BMW";
car.color="black";
car.price=40000000;
console.table(car);
console.log(car); //{name: 'BMW', color: 'black', price: 40000000
console.log(car.name); //BMW
console.log(car.color); //black
console.log(car.price);//40000000
console.log(car["color"]);//black


// to change the value
car.price=5000000;
console.log(car.price);//5000000
console.log(car);//{name: 'BMW', color: 'black', price: 5000000}

// add property
car.fecility="extra storage";
console.log(car);//name: 'BMW', color: 'black', price: 5000000, fecility: 'extra storage'}
/// object inside another object also possible
// object inside another array also possible

let bike={
    color:"red",
    price:10000,
    brand:"rx-100",
    break:function (){
        console.log(" stop the bike");
    },
    raise: ()=>{
        console.log( "incrase the speed");
    },
    cluch(){
        console.log("control the bike");

    }
    // it is just function definition if you call it will execude
    // if you using object inside function this is called method

}
bike.break();
console.log(bike);//color: 'red', price: 10000, brand: 'rx-100', break: ƒ, raise: ƒ}
console.table(bike);
console.log(bike.break);//stop the bike
// .assign({},objname1,objname2); method
let cancat=Object.assign({} ,car,bike);
console.log(cancat); // cancat the 2 objects













// let obj={
//     ename:"sathish",
//     course:"developer",
//     email:"sathish@gmail.com"

// };
// //object.keys(obj_name)
// //object.values(obj_name)
// //object.entries(obj_name)
// //object.
// //obj.hasWwnProperty("subject") //fasle
// //define and defines properties only for grooming 
// console.log(obj);

// function fun(){
//     console.log("this is function");

// }
// fun();

//  let anno=function (){
//     console.log("annamal");
// }
// //console.log(anno);
// anno();
// let arrow=()=>{
//     console.log("  arrowuu fuction")
// }
// arrow();

