//1.使用commonjs模块化规范
const {add,mul} = require("./mathUtils.js")

console.log(add(10,20))
console.log(mul(10,10))

//2.使用es6语法导入
import info from './info.js'

console.log(info.name)
console.log(info.age)