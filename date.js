let d=new Date(); //Tue Oct 01 2024 12:39:01 
console.log(d);
let ms= d.getMilliseconds;
console.log(ms);
let hr=d.getHours();
let min=d.getMinutes();
let month=d.getMonth();
let day=d.getDay();  // 2 normally 
let year=d.getFullYear();
console.log(year);  // 2024
let date=d.getDate();
console.log(date); //1

console.log(day);
console.log("today is "+d);
let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let months=["january","february","march","april","may","june","july",""]
console.log(d.toLocaleString());//10/1/2024, 12:34:31 PM
console.log(d.toISOString());  //024-10-01T07:04:59.999Z
console.log(d.toDateString()); //tue Oct 01 2024
console.log(months[day]);//march



//output today i 1 october 2024 and this is tuesday
console.log(days[day]);// tuesday



// 

console.log(Math.floor(3.66));  //3
console.log(Math.ceil(4.3));//5 
console.log(Math.round(4.6))//5
let a=[45,546,43,1,2];
console.log(Math.max(45,34,33)); //45

let random4=Math.floor(Math.random()*10000);
console.log(random4);        //4419

let getDate=()=>{
    let now=new Date();
    let hr=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    let year=now.getFullYear();
    console.log(`${hr} :${min} :${sec}:${year}`);
    sec=sec>10? "0"+sec: sec;
    min=min>10?"0"+min:min;

    

}

 getDate()

 // password

 let generatePassword=()=>{

    let caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smal=caps.toLowerCase();
    let number='0123456789'
    let special="!@#$%&^*_";
    // let password+=""
    caps[Math.floor(Math.random()*caps.length)]
    let num=Math.floor(Math.random()*caps.length)
    console.log(num);
    console.log(caps.charCodeAt(num));
    console.log(caps[num]);
    password+= capss[Math.floor(Math.random()*caps.length)]+smal[Math.floor(Math.random()*smal.length)]   

 }
 let caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 
 
 













