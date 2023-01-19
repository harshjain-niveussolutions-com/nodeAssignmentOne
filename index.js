const fs = require('fs');
const folderName = 'public';
const folderPath = `./${folderName}`

let prom = new Promise(function(resolve,reject) {
    let x =0
    if(x==0){
        resolve('Promise Resolved');
    }
    else{
        reject('Promise Rejected')
    }
});
prom.then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
})
async function writeFile(fileName,txt){
    try {
        if(!fs.existsSync(folderPath+`/${fileName}`)){
            await fs.promises.writeFile(folderPath+`/${fileName}`,txt);
            console.log('file created');
        }
        
    } catch (error) {
        console.log('harsh error here',error)   
    }
}

let fname = 'index1.html';
let txt = '<h1>Hello World</h1>';
writeFile(fname,txt)