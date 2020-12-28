const { expect } = require('chai');
const request = require('supertest');

const app = require('../src/web/index.js');

describe('API test', () => {
  it('API is healthy.', (done) => {
    request(app).get('/health')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal('healthy');
        done();
      })
      .catch((err) => done(err));
  });

  it('Sucesfully find game', (done) => {
    request(app).get('/game/00000000-0000-0000-0000-000000000000')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('board');
        expect(res.body).to.have.property('gameId');
        expect(res.body.gameId).to.equal('00000000-0000-0000-0000-000000000000');
        done();
      })
      .catch((err) => done(err));
  });
});
