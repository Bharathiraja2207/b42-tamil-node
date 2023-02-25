// var far=100*200;
// console.log(far);node 

const fs=require("fs");
// const quete="live ahd let live";
// var a=  process.argv 
// for(var i=1;i<=a[2];i++){
// var arr=  process.argv 
// var arr1=[i]+""
// var arr2=arr.concat(arr1)
// console.log(arr2);
// fs.writeFile(`nodee${arr2[3]}.html`,quete,(err)=>{console.log("completed")});
// }



// const fs=require("fs");
// const quete="live ahd let live";
// var a=  process.argv 
// for(var i=1;i<=10;i++){
// var arr=  process.argv 
// var arr1=[i]+""
// var arr2=arr.concat(arr1)
// // console.log(arr2);
// fs.writeFile(`node${arr2[2]}.html`,quete,(err)=>{console.log("completed")});
// }



// read

// fs.readFile("./12.txt","utf-8",(err,data)=>{
//     if(err){
//         console.error("wrong",err)
//     }
//     else{
//         console.log("comoleted",data)
//     }
// })

// update

const quete="all is well"
fs.appendFile("./12.txt",quete,(err)=>{console.log("completed")});

// delete

// const quete="all is well"
// fs.unlink("./bharathi.txt",(err)=>{console.log("completed")});