//https://api.github.com/users
// fetch is used to fetch  the api data 
// it will return the one promise output so you have to handle data
// but it will not return the original data
// it handled by .catch .then
// it will convert the json format 
// data is nothing but array of object

// let fetched = fetch("https://api.github.com/users");
// console.log(fetched);


// fetched.then((selected)=>{

//     //console.log(selected);
//    let jsonData=selected.json();
//     // console.log(jsonData);
//     jsonData.then((finalData)=>{
//         console.log(finalData);
//     }).catch((err)=>{
//         console.log(err);
        
//     })


// }).catch((rejected)=>{
//     console.log(rejected);
    
// })

// I want only login name how to get  ?
let fetched = fetch("https://api.github.com/users");
console.log(fetched);
let con=document.querySelector(".con");
console.log(con);


fetched.then((selected)=>{

    //console.log(selected);
   let jsonData=selected.json();
    // console.log(jsonData);
    jsonData.then((finalData)=>{
        console.log(finalData[0].login);// mojombo 

        finalData.array.forEach((f) => {
            console.log(f);
            let list=document.createElement("li");
            list.innerText=f.login;
            console.log(li);
            
            
        });
    }).catch((err)=>{
        console.log(err);
        
    })




}).catch((rejected)=>{
    console.log(rejected);
    
})




