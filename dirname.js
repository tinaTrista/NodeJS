
// __dirname 是全局变量
let path = require('path')
console.log(__dirname + '/test.js') // /Users/lisa/lisa_project/nodeJS/test.js
console.log(path.resolve(__dirname,'../dist'))// 转化为绝对路径
