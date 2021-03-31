const request = require('supertest');
const app = require('../lib/app');
const fs = require('fs').promises;

describe('app route', () => {
  it('reads file from index.html and sends its contents when hitting the path http://localhost:7890/index.html', async() => {

    const data = await request(app)
      .get('/index.html');

    const res = await fs.readFile('./public/index.html', 'utf-8');

    expect(data.text).toEqual(res);
  });
});
