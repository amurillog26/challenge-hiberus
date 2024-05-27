import request from 'supertest';
import app from '../src/app.js'; // Asegúrate de que el archivo de entrada sea 'app.js'

jest.mock('../src/database.js', () => {
  const actualDatabaseModule = jest.requireActual('../src/database.js');
  return {
    ...actualDatabaseModule,
    pool: {
      query: jest.fn().mockResolvedValue([[{ now: new Date().toISOString() }], []]),
    },
  };
});

describe('GET /ping', () => {
  it('should return the current time', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('now');
  });
});
