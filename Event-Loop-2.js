const fs = require('fs')
let a = 200;
Promise.resolve(()=>
    console.log('hello promise')
);
setImmediate(()=>console.log('hello immediate'));
fs.readFile('./file2.txt','utf-8',(err,data)=>{
   console.log(data)
})
setTimeout(()=>console.log('hello timeout'),0)
function Likhith()
{
    console.log('a=',a)
}
Likhith()

