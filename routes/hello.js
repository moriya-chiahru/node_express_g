var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    title: 'hello!',
    content: 'これはサンプルのコンテンツです。'
  };
  res.render('hello', data);
});

module.exports = router;
