const supertest = require('supertest');
const app = require('../src/server');
const request = supertest(app);


describe('testing players route...', () => {

  it('should be say hy', async done => {
    const response = await request.get('/players');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hi poc!');

    done();
  });

});
