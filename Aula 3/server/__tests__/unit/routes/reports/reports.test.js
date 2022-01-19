const supertest = require('supertest');
const express = require('express');
const routes = require('../../../../routes');

const axios = require('axios');

const app = new express();
app.use('/', routes);

jest.mock('axios');


    test('GET /api/v1/documents', async () => {

      const docs = { data: [
        { _id: 1, metadata: "" },
        { _id: 2, metadada: "" },
      ]};
      axios.get.mockResolvedValueOnce(docs);

      await supertest(app).get("/api/v1/documents/")
        .expect(200)
        .then(async (response) => {
          expect(response.body[0]).toBeTruthy();
          expect(response.body[0]._id).toBeTruthy();
          expect(response.body[0]._id).toBe(1);
          expect(response.body[1]._id).toBe(2);
        });
    });

    describe('Database mock teste', () => {

    beforeAll(()=>{
      const find = require('../../../../lib/client/find');
        jest.mock('../../../../lib/client/find');
        find.mockReturnValue(Promise.resolve([
          { _id: '123' }]
          )
        );
    });

    test('GET /api/v1/database/?id=<given-id>', async () => {

      await supertest(app).get('/api/v1/database/').query({ id:'123' })
        .expect(200)
        .then(async (response) => {
          expect(response.body).toBeTruthy();
          expect(response.text).toBeTruthy();
        });
    });
  });