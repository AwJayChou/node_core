const kexpress = require('./kexpress')
const path = require('path')
const fs = require('fs')
const app = kexpress()
app.get('/',(req,res) => {
    fs.readFile(path.resolve('./index.html'),(err,data) => {
        if(err) {
         res.statusCode = 500
         res.end('Interal Error')
        }
         res.statusCode = 200
         res.setHeader('Content-Type','text/html')
          res.end(data)
          return
       })
})
app.get('/user',(req,res) => {
    res.statusCode = 200
          res.setHeader('Content-Type','application/json')
          res.end(JSON.stringify([{name:'jerry',age:18}]))
})
app.listen(3001)