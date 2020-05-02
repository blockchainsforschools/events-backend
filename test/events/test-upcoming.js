const supertest = require('supertest');
const app = require('../../app');
const assert = require('assert');

describe('GET /api/events/upcoming', () => {
  it('responds with a success JSON response body', (done) => {
    supertest(app)
      .get('/api/events/upcoming')
      .set("Accept", "application", /json/)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        assert.equal(res.body.success, true);
      })
      .end((err, res) => {
        if (err) done(err);
        done();
      });
  });
});
