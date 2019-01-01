const express = require('express');

const router = express.Router();

// デバッグ用 : マウント・パスを指定していないので全てのアクセスで実行させる
router.use((req, _res, next) => {
  // console.log(`${req.url} [${req.method}] : ${JSON.stringify(req.body)}`);
  next();
});

router.get('/', (_req, res) => {
  res.send('Hello World');
});

// ココに対応するテストを書かない・上手く赤いハイライトがされている
router.get('/test', (_req, res) => {
  res.send('Hello World Test');
});

module.exports = router;
