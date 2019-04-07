// stream 用于node中流数据的交互借口
const fs = require('fs')
// const rs = fs.createReadStream('./config.js')
// const ws = fs.createWriteStream('./config2.js')

// rs.pipe(ws)

const rs2 = fs.createReadStream('./01.png')
const ws2 = fs.createWriteStream('./02.png')

rs2.pipe(ws2)
