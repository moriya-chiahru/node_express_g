var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //表示
  var data = {
    title: 'Hello!',
    content: '※何か書いて送信してください。'
  };
  res.render('hello', data);
});

//ポスト受信
router.post('/post', function(req, res, next) {
  //ポスト取得　input name='message'
  var msg = req.body['message'];
  //表示
  var data = {
    title: 'Hello!',
    content: 'あなたは' + msg + 'と送信しました。'
  };
  res.render('hello', data);
});

module.exports = router;
