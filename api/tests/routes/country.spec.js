/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  id:'AFG',
  flag:"www.google.com",
  continent:"abc",
  capital:"abc"
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  describe('GET /countries by name', () =>{
    it('should get 200', ()=> {
      return agent.get('/countries?name=Arg').expect(200)
    });
    it('should get 400', () => {
      return agent.get('/countries?name=asd').expect('Not found')
    })
  })
  describe('GET /countries by id', () =>{
    it('should get 200', ()=> {
      return agent.get('/countries/AFG').expect(200)
    });
    it('should get 400', () => {
      return agent.get('/countries/ARG').expect('Not found')
    })
  })
});
