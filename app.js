//. app.js
var express = require( 'express' ),
    app = express();
var users = require( './routes/users' );

//. ユーザー関連 API を /api/user 以下にルーティング
app.use( '/api/user', users );

//. ポート番号を決めて起動
var port = process.env.port || 8080;
app.listen( port );
console.log( "server stating on " + port + " ..." );

//. テスト用に app 全体をエクスポート
require('cf-deployment-tracker-client').track();
module.exports = app;
