
let str = 'msg="hello" id="5"';
let querystring = require('querystring');
let obj = querystring(str,' ', '=');
console.log(obj)