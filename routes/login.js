var express = require('express');
var router = express.Router();
var crypto = require('crypto');
// var io = require('socket.io')(http);
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log('登录中....');
    console.log(req.body);
    var hash = crypto.createHmac('sha256', req.body.pwd)
    .update('I love gctj')
    .digest('hex');
    console.log('密码加密成功:'+hash);
    console.log('登录成功....');
    console.log('跳转中....');
    res.render('main', { title: 'Express' });
    console.log('会话中....');
});
module.exports = router;
