/*
异步还是同步
在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？

由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，
必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，
因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。

 */


'use strict';

var fs = require('fs');

//async read
// fs.readFile('./read.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// sync read
// try {
//   var data1 = fs.readFileSync('test.txt', 'utf-8');
//   var data2 = fs.readFileSync('test2.txt', 'utf-8');
//   console.log(data1);
//   console.log(data2);
// } catch (err){
//   console.log(err);
// }
// write
// var write = 'Hello, Node.js';
// fs.writeFileSync('./syncWrite.txt', write);
// fs.writeFile('./asyncWrite.txt', write, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//     }
// });

// stat async
fs.stat('helloword.js', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
// statSync
let stat = fs.statSync("helloword.js");
console.log(stat)
