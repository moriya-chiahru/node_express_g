var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //クエリの取得
  var name = req.query.name;
  var mail = req.query.mail;
  //表示
  var data = {
    title: 'Hello!',
    content: 'あなたの名前は' + name + 'にゃ。<br>' +
    'メールアドレスは' + mail + 'だにゃ！'
  };
  res.render('hello', data);
});

module.exports = router;
