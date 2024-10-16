// fetch
// fetch is used to 2 handle the promise
//async_await used to 1 time handled 

let fetch_data=async()=>{

let data= await fetch("https://api.github.com/users");

try{

// asynch_await
// convert json format
let js= data.json();
//console.log(js);
js.then((fin)=>{
    console.log(fin);
    
}).catch((er)=>{
    console.log(er);
})
console.log(js);

}
catch(err){
    console.log(er);

}
}

fetch_data();

