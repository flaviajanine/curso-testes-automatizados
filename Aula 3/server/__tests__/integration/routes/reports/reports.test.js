const supertest = require('supertest');
const express = require('express');
const routes = require('../../../../routes');

const app = new express();
app.use('/', routes);

describe('Integration test in routes', () => {
    test('POST /api/v1/documents', async () => {      
        await supertest(app).post("/api/v1/reports/?id=03cd85c77564af5c781bfc1f32ca2c46")
          .expect(200)
          .then(async (response) => {
            expect(response.body.result).toBeTruthy();
            expect(response.body.result._id).toBeTruthy();
            expect(response.body.result.metadata).toStrictEqual({
                "properties1": "name1",
                "properties2": "name2",
                "properties3": "name3"
              });
          });
      });      
});