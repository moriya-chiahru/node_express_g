var express = require('express');
var router = express.Router();

//RSS受信モジュール追記
var http = require('https');
var parseString = require('xml2js').parseString;


/* GET home page. */
router.get('/', function(req, res, next) {
  var opt = {
    host: 'news.google.com',
    port: 443,
    path: '/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss'
  };

  http.get(opt,(rss2) => {
    var body = '';

    rss2.on('data',(data) => {
      body += data;
    });

    rss2.on('end',() => {
      parseString(body.trim(), (err, result) => {
        var data = {
          title: 'Hello',
          content: result.rss.channel[0].item
        };
        res.render('hello', data);
      });
    });
  });
});

module.exports = router;
