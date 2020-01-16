//. users.js
var express = require( 'express' ),
    bodyParser = require( 'body-parser' ),
    router = express.Router();

//. ポストデータを JSON で受け取る
router.use( bodyParser.urlencoded( { extended: true } ) );
router.use( bodyParser.json() );

//. 検索 : GET /api/user/:id
router.get( '/:id', function( req, res ){
});

//. 新規作成 : POST /api/user
router.post( '/', function( req, res ){
});

module.exports = router;
