const assert = require('assert');
const app = require('../index');
const axios = require('axios');

const localUrl = 'http://localhost:8000/';
describe('testing', function () {

  let server;
  const id = '5f3cb5a239b7fc436f3337e2';

  before(() => {
    server = app;
  })

  after(() => {
    server.close();
  });

  it('should return 2 when 1 + 1', () => {
    assert.equal(4, 2+2);
  });

  it('ensure /api/pokemon works', (done) => {
    axios.default.get(`${localUrl}api/pokemon`).then((res) => {
      assert.equal(200, res.status);
      assert.equal(true, !!res.data.pokemon);
      done();
    });
  });

  it('ensure /api/pokemon/:id works', (done) => {
    axios.default.get(`${localUrl}api/pokemon/${id}`).then((res) => {
      assert.equal(200, res.status);
      assert.equal(id, res.data.pokemon._id);
      done();
    })
  })
});