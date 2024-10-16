// string having two type is  string literal  and string object
// using string use ` ` or " " or ' ' or """"
// input  str= "AABCASDS"

// 1. toLowerCase()  5.endsWith()   9. trim()       13. concat()    17.substr()     21.padEnd()
// 2. toUpperCase    6.indexof()    10.trimStart()  14.replace()    18.slice        22.search()
// 3. includes()     7.listindex()  11.trimEnd()    15.replaceAll() 19.substring()
// 4. startsWtith()   8.split()       12.search()    16.valueof()    20.padstart()
let str="welcome to my string program ";
console.log(str);
console.log(str.toUpperCase());//                                                                          upper case
console.log("its  converted the lower:"+str.toLowerCase());                                                //lowercase
console.log(str.length); //29
console.log(str);
console.log(" "+str.concat("good day"));
console.log(str[5]);//c
//searching use                                                                                                .includes
let search=str.includes("my"); //searching is there it will return true other wise false
console.log(search) //true
// 4.                                                                                                         .startsWith() 
// if the word or letter is  starting is present or not
console.log(str.startsWith("welcome")); //true
console.log(str.startsWith("w")); //true
//5.                                                                                                           .endWith()
console.log(str.endsWith("am ")); //true
console.log(str.endsWith(" ")); //true'
console.log(str.indexOf("l")); //2
//6.                                                                                                                   charAt()
console.log("printing the letter  :"+str.charAt("2"));
//     it will generate one code value                                                                               charCodeAt()

let arr="Zyx good day ";
console.log("generating one  value  a    :"+arr.charCodeAt(2)); // 32

//7                                                                                                               .indexOf()

//9 printng part by part use                  .slice(start,end)   .substring(start,end)  .substr(start,length )   .replace() .repaceall(" ")
// substr() 
// it can use -ve value but not use -ve length
// if you not specifying the length it will auto adding full length

let str1="have a nice day for all";
console.log(str1.substr("substr"+2,)); //ve a nice day for all
console.log("substr"+str1.substr(-4,-3));// only print substr
console.log("s")
console.log(str1.slice(0,15));  //have a nice day
console.log(str1.substring(0,15));   //have a nice day
console.log(str1.length);  //23
console.log(str1.substr(2,23));//ve a nice day for all
//  it will replace the method                                                                                 .replace()  .replaceAll()
console.log(str1.replace("day","monday"));//have a nice monday for all
//                                                                                         .trim()   it will remove space 
let str2="!            good day                  !";
console.log(str2);//!            good day                  !
console.log(str2.trim());//!good day!
console.log(str2.trimStart());//!good day           !
console.log(str2.trimEnd()); // !   good day!
//      it will add the string                                                       .padEnd(length,"adding data");
let str3="9";
console.log(str3.padEnd(10,"0"));//90000000000 
console.log(str3.padStart(4,"5"));  //55559
let str11="666666666666666666";
console.log(str11.padStart(4,"s"));   // if the length is more to compare to declaring process it will not print "s"
console.log(str3)
//                                                                                    substr
let str4 = "sp the mass"
console.log(str4.substr(2,4))   //                                           substr (startindex,length)  

                   // slice                                                .slice (starting index, ending index)
let str5 = " sp the massss..... "
console.log(str5.slice(1,5))         //(startindex,endindex)
console.log(str5.slice(1))
console.log(str5.slice(-6,-1))

                   // substring                                          .substring(start index , end index)
let str6 = "sp the mass";  
console.log(str6.substring(-1,8));    //(startindex,endindex)
// index()
 console.log(str6.indexOf("d")); // if not there the string its default generating -1
 console.log(str6.indexOf("t")); //3
 console.log(str6.lastIndexOf("s"));//10
 console.log(str6.search("hi"));//-1 default value if not specify the value
 console.log(str6.search("the"));//3

 // split method
 let split1="morning afternoon evening";
 // important convert string to array and array to string
 let ar= split1.split(" ");
 console.log(ar); // (3) ['morning', 'afternoon', 'evening']
//  let ar1=ar.split(' ')
//  console.log(ar1);




// string object declaration
let strobj= new String("this is string object");

let strobj1= "this is string object";
console.log(strobj);
console.log(strobj1==strobj); //true
console.log(strobj1===strobj);
console.log("hello");
let val=123;
 while(val>0){
   let val1= val%10;
   if(val1%2==1){
    let sum =+ val1;
    console.log(sum);
   }
   val/=10;

 }
 
