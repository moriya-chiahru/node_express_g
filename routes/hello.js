var express = require('express');
var router = express.Router();

//SQLliteモジュール追記
var sqlite3 = require('sqlite3');

//データベースオブジェクトの取得
var db = new sqlite3.Database('mydb.sqlite3');

//GETアクセスの処理
router.get('/', function(req, res, next) {
  //データベースのシリアライズ
  db.serialize(() => {
    //レコードをすべて取り出す
    db.all("select * from mydata", (err, rows) => {
      //データベースアクセス完了の処理
      if(!err) {
        var data = {
          title: 'Hello',
          //取得したデータ
          content: rows
        };
        res.render('hello/index', data);
      }
    });
  });
});

//入力画面
router.get('/add', (req, res, next) => {
  var data = {
    title: 'Hello/Add',
    content: '新しいレコードを入力:'
  }
  res.render('hello/add', data);
});

//データをデータベースに入れる
router.post('/add', (req, res, next) => {
  var nm = req.body.name;
  var ml = req.body.mail;
  var ag = req.body.age;
  db.run('insert into mydata (name, mail, age) values (?, ?, ?)', nm, ml, ag);
  res.redirect('/hello');
});

module.exports = router;
