const http = require('http')
const fs = require('fs')
const path = require('path')
http.createServer((req,res) => {
    const {url,method} = req
  if(url === '/' && method === 'GET'){
      fs.readFile(path.resolve('./index.html'),(err,data) => {
       if(err) {
        res.statusCode = 500
        res.end('Interal Error')
       }
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
         res.end(data)
      })
     
  } 
//   else if(url === '/users' && method === 'GET'){
//       res.statusCode = 200
//       res.setHeader('Content-Type','application/json')
//       res.end(JSON.stringify([{name:'jerry',age:18}]))
//   }
else if(req.headers.accept.indexOf('image/*')!==-1 && method === 'GET'){
    console.log(url)
   fs.createReadStream('.'+url).pipe(res)
}
}).listen(3000)