const fs = require('fs')
const crypto = require('crypto')
 // const https = require('https')
let a = 20;
let b = 30;


fs.readFile('./file2.txt','utf8',(err,data)=>{
   console.log('Display data :', data)
});
// https.get('https://dumyJson.com',(req)=>{
//     console.log('print data')
// })
Likhith()
crypto.pbkdf2('passward','salt',50000,50,'sha512',(err,key)=>{
   console.log('key is password')
});
setTimeout(()=>console.log('print time'),900)

function Likhith()
{
  let sum = a+b;
  console.log(sum)
}
