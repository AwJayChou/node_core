const fs = require('fs')
// 读取一个文件
const data = fs.readFileSync('./config.js')
console.log(data)
// // 异步版本
fs.readFile('./config.js',(err,data) => {
    console.log(data)
})

// promise
console.log('其他操作')
const {promisify} = require('util')
const readFile = promisify(fs.readFile)
readFile('./config.js').then(data => console.log(`promisify ${data}`))

// v 10.0
// fs Promise API
const {promises} = require('fs')
promises.readFile('./config.js').then(data=> console.log(`v10 ${data}`))
