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

[作業箇所](https://daveceddia.com/create-react-app-express-backend/#configure-the-proxy)

## 起動

### expressのシステムを起動
expressのプロジェクトフォルダ名はex-gen-appなので、カレントディレクトリをex-gen-appへ移動し、ポート番号を指定して起動。
``` PORT=3001 node bin/www ```

### reactのシステムを起動
別タブでターミナルかコマンドを立てて、
reactのプロジェクトフォルダ名はclientなので、カレントディレクトリをclientへ移動し、起動。
``` npm start ```

expressとreact両方起動します。