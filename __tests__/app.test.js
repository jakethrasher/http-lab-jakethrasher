const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('runs an HTTP GET request and returns the correct response', async() => {

    const parsedRequest = {
      method: 'GET',
      path: '/',
      body: 'hi'
    };

    const data = await request(app)
      .get('/');
    expect(data.text).toEqual(parsedRequest.body);
  });

  it('makes an POST request to the echo route', async() => {

    const parsedRequest = {
      method: 'POST',
      path: '/echo',
      body: { name:'Jake' }
    };

    const data = await request(app)
      .post('/echo')
      .send(parsedRequest.body);
    expect(JSON.parse(data.text)).toEqual(parsedRequest.body);
  });

  it('makes an GET request to the red route', async() => {

    const parsedRequest = {
      method: 'GET',
      path: '/red',
      body: '<html><h1>red</h1></html>'
    };

    const data = await request(app)
      .get('/red')
      .send(parsedRequest.body);
    expect(data.text).toEqual(parsedRequest.body);
  });
  it('makes an GET request to the blue route', async() => {

    const parsedRequest = {
      method: 'GET',
      path: '/blue',
      body: '<html><h1>blue</h1></html>'
    };

    const data = await request(app)
      .get('/blue')
      .send(parsedRequest.body);
    expect(data.text).toEqual(parsedRequest.body);
  });
  it('makes an GET request to the green route', async() => {

    const parsedRequest = {
      method: 'GET',
      path: '/green',
      body: '<html><h1>green</h1></html>'
    };

    const data = await request(app)
      .get('/green')
      .send(parsedRequest.body);
    expect(data.text).toEqual(parsedRequest.body);
  });
});
