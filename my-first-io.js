const { setFips } = require("crypto");
const fs = require("fs")
// console.log(fs)
// const buf = fs.readFileSync(process.argv[2]);
// console.log(buf)
// const str = buf.toString().split("\n").length-1;
// console.log(str);
a = 45
console.log(a);
// const buf = fs.readFileSync("baby-steps.js");
// const str = buf.toString().split("\n").length-1;
// console.log(str);
// console.log(buf);                                           
// fs.readFile("baby-steps.js",(err,data)=>{
//     console.log(data);                                 //arrow function
// })
// fs.readFile("baby-steps.js",function(err,data)
// {
//     console.log(data);

// })                                  //annonmous function


fs.readFile("baby-steps.js",mycallback)

function mycallback(err,data){
    console.log(data);  
}
a = 55
console.log(a);

// const buf = fs.writeFileSync("baby-steps.js","hi");

 
