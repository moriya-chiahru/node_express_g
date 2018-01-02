var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var msg = '※何か書いて送信してください。';
  //セッションの値の有無を確認
  if(req.session.message != undefined){
    msg = "Last Message : " + req.session.message;
  }
  var data = {
    title: 'Hello!',
    content: msg
  };
  res.render('hello', data);
});

//ポスト受信
router.post('/post', function(req, res, next) {
  //ポスト取得　input name='message'
  var msg = req.body['message'];
  //セッションに入れる
  req.session.message = msg;
  //表示
  var data = {
    title: 'Hello!',
    content: "Last Message : " + req.session.message
  };
  res.render('hello', data);
});

module.exports = router;
