const os = require('os')
//调用本地模块
// const mem = os.freemem() / os.totalmem() * 100
// console.log(`内存占用率`+mem)

// // 第三方模块
// const cpuStat = require('cpu-stat')
// cpuStat.usagePercent((err,percent) => {
//     console.log(`cpu占用率${percent}`)
// })
const conf = require('./config')
console.log(conf);
const {rmbTodollar} = require('./currency')
console.log(rmbTodollar(6))
