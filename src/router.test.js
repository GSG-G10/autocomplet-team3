const supertest = require('supertest');
const router = require('./router');

test('teting the home "/" router', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

test('teting the search "/search" router', (done) => {
  supertest(router)
    .get('/search?q=cat')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

test('teting the not defind router', (done) => {
  supertest(router)
    .get('/home')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

test('teting the javascript file router', (done) => {
  supertest(router)
    .get('/public/main.js')
    .expect(200)
    .expect('Content-Type', /javascript/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

test('teting the css file router', (done) => {
  supertest(router)
    .get('/public/style.css')
    .expect(200)
    .expect('Content-Type', /css/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});
