const supertest = require('supertest');
const app = require('../src/server');
const request = supertest(app);


describe('testing players route...', () => {

  it('should retrieve all players ordered by id', async done => {
    const response = await request.get('/players');

    expect(response.status).toBe(200);

    const result = response.body;
    expect(result).toHaveLength(5);
    const ids = result.map(player => player.id);
    expect(ids).toStrictEqual([17, 52, 65, 95, 102]);

    done();
  });

  it('should retrieve a player by id', async done => {
    const response = await request.get('/players/17');

    expect(response.status).toBe(200);
    const result = response.body;
    expect(result.lastname).toBe('Nadal');
    expect(result).toHaveProperty('firstname'); // etc ...

    done();
  });

  it('should return not found if the player do not exists', async done => {
    const response = await request.get('/players/wrongId');

    expect(response.status).toBe(404);
    expect(response.text).toBe('Player with id "wrongId" do not exists.');

    done();
  });

  it('when a player is deleted should be return 204 and then player will not be found', async done => {
    const response = await request.delete("/players/17");

    expect(response.status).toBe(204);

    const response2 = await request.get("/players/17");

    expect(response2.status).toBe(404);

    done();
  });

  it('should return 404 if the player to be deleted no not exits', async done => {
    const response = await request.delete("/players/wrongId");

    expect(response.status).toBe(404);

    done();
  })

});
