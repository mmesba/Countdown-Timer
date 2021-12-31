const https = require('https');

let link = "https://myapp-002.azurewebsites.net/";
 
// Send request to server
let getFunc1 = ()=>{ https.get(link, (res)=>{
    console.log('statusCode azure countdown app', res.statusCode);
    // console.log('headers', res.headers);
    
    // console.log('Pinging subsequently');
    // res.on('data', (d)=>{
    //     process.stdout.write(d)
    // })
 }).on('error', (e)=>{
     console.log(e);
 })
 
}

module.exports = getFunc1