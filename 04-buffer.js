// buffer : 八位字节组成的数组
const buf1 = Buffer.alloc(10)
console.log(buf1)

// 从数据创建
const buf2 = Buffer.from([1,2,3])
console.log(buf2)

const buf3 = Buffer.from('hello , 开课吧')
console.log(buf3)

// 写入 
buf1.write('hellooooooooooo')

// 读取
console.log(buf1.toString())

// 合并
const buf4 = Buffer.concat([buf1,buf3])