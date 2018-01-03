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

//新規作成のデータをデータベースに入れる
router.post('/add', (req, res, next) => {
  var nm = req.body.name;
  var ml = req.body.mail;
  var ag = req.body.age;
  db.run('insert into mydata (name, mail, age) values (?, ?, ?)', nm, ml, ag);
  res.redirect('/hello');
});


//詳細画面
router.get('/show', (req, res, next) => {
  var id = req.query.id;
  db.serialize(() =>{
    var q = "select * from mydata where id = ?";
    db.get(q, [id], (err, row) => {
      if (!err) {
        var data = {
          title: 'Hello/show',
          content: 'id = '+ id + 'のレコード',
          mydata: row
        }
        res.render('hello/show', data);
      }
    });
  });
});

//編集画面の処理
router.get('/edit', (req, res, next) => {
  var id = req.query.id;
  db.serialize(() => {
    var q = "select * from mydata where id = ?";
    db.get(q, [id], (err, row) => {
      if (!err) {
        var data = {
          title: 'Hello/edit',
          content: 'id = '+ id + 'のレコード',
          mydata: row
        }
        res.render('hello/edit', data);
      }
    });
  });
});

//編集画面の保存処理
router.post('/edit', (req, res, next) => {
  var id = req.body.id;
  var nm = req.body.name;
  var ml = req.body.mail;
  var ag = req.body.age;
  var q = "update mydata set name = ?, mail = ?, age = ? where id = ?";
  db.run(q, nm, ml, ag, id);
  res.redirect('/hello');
});

//削除画面
router.get('/delete', (req, res, next) => {
  var id = req.query.id;
  db.serialize(() =>{
    var q = "select * from mydata where id = ?";
    db.get(q, [id], (err, row) => {
      if (!err) {
        var data = {
          title: 'Hello/delete',
          content: 'id = '+ id + 'のレコードを削除',
          mydata: row
        }
        res.render('hello/delete', data);
      }
    });
  });
});

//削除の保存処理
router.post('/delete', (req, res, next) => {
  var id = req.body.id;
  var q = "delete from mydata where id = ?";
  db.run(q, id);
  res.redirect('/hello');
});


module.exports = router;
