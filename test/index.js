// npx mocha で実行すると、自動的に ./test/*.js をテストしてくれる
// mocha と supertest とで watch している時に複数回サーバを listen() してしまうのを避ける : http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html

const expect = require('expect');  // Jasmine 風な expect() を書きたいので

const app = require('../src/index');

const supertest = require('supertest').agent(app.listen());  // Express の app を読み込んでテストできる

describe(`Route '/'`, () => {
  it('Should Be!', (done) => {
    supertest.get('/')
      .expect(200)
      .end((error, response) => {
        if(error) {
          return done(error);
        }
        expect(response.text).toBe('Hello World');
        done();
      });
  });
});
