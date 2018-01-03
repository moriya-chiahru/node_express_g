ExpressでViewエンジンをReactで使う。

下記のサイトを参考に行った。
[Create React App with an Express Backend](https://daveceddia.com/create-react-app-express-backend/)


## Reactのインストール
npmでグローバルにcreate-react-appをインストール
``` npm install -g create-react-app ```

clientという名前のプロジェクトを作成(なんでもいい)
``` create-react-app client ```

## package.jsonの設定の変更

clientという名前で作成したので、フォルダが作成されたので移動する。
```cd client```

その中のパッケージJSONがあるので、ポート番号を設定する。

[ポート番号をセット · moriya-chiahru/node_express_g@497fd40](https://github.com/moriya-chiahru/node_express_g/commit/497fd40a26ca2faefb7c5f98f448fdf352fed804)

[参考](https://daveceddia.com/create-react-app-express-backend/#configure-the-proxy)

## User.jsでJsonデータを返すように設定

React部分編集
[user情報を表示する · moriya-chiahru/node_express_g@42785d3](https://github.com/moriya-chiahru/node_express_g/commit/42785d37578e9f0a06db19414614997ee52b125f#diff-57f023f88f23f624aec6289090405c9b)

Express部分編集
[user情報を表示する · moriya-chiahru/node_express_g@42785d3](https://github.com/moriya-chiahru/node_express_g/commit/42785d37578e9f0a06db19414614997ee52b125f#diff-e9f8fcf8d0b7b7150ff1c16a7c69ea74)

## 起動

### expressのシステムを起動
expressのプロジェクトフォルダ名はex-gen-appなので、カレントディレクトリをex-gen-appへ移動し、ポート番号を指定して起動。  
``` PORT=3001 node bin/www ```

### reactのシステムを起動
別タブでターミナルかコマンドを立てて、
reactのプロジェクトフォルダ名はclientなので、カレントディレクトリをclientへ移動し、起動。  
``` npm start ```

expressとreact両方起動します。