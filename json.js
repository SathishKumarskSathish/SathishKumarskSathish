//  JSON - javascript object notation
// its one format where we can transfor the data
// its is used to send the data 
//2 methods 
//1 stringify -used to convert  js to json 
//     2 parse method

// 1. JSON.stringify()      method  obj to json fromat
let a={
    name:"sathish",
    course:"mca",
    mark:[78,66,44,33]
    
}
console.log(a);  //name: 'sathish', course: 'mca', mark: Array(4)}
let a1=JSON.stringify(a);
console.log(typeof a1);  //string
console.log(a1);  // {"name":"sathish","course":"mca","mark":[78,66,44,33]}


// 2nd JSON.parse()    method convert JSON to obj
let a2=JSON.parse(a1);
console.log(a2);  //name: 'sathish', course: 'mca', mark: Array(4)}


