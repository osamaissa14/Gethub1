// const fs=require('fs');

// // fs.writeFile('hello.txt', 'Hello World!', (err) => {
// // if(err) throw err;
// // console.log('File created successfully!');
// // });



// fs.readFile('./hello.txt', 'utf8', (err, data) => {
// if(err) throw err; 
// console.log(data);
// })

const generatName=require("sillyname")
var name=generatName()
console.log(    `Hello ${name}`);