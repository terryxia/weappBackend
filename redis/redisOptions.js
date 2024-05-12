const options = {
    host: 'localhost',
    port: 6379,
    // password: '', // 本人未设置密码，所以隐藏，若你设了密码，则输入密码
    detect_buffers: true // 传入buffer 返回也是buffer 否则会转换成String
   }
    
   module.exports = options;