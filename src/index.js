const express = require('express');

const app = express();

// CORS を許可する
app.use((_req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// ルーティング定義
app.use('/', require('./routes/router'));

// サーバ起動
if(!module.parent) {  // UT 時はココに合致しなくなるので、テストコードの方で listen() するようにする。そのかわりこの if ブロックのカバレッジは取れなくなる
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Listen : ${port}`);
  });
}

module.exports = app;
