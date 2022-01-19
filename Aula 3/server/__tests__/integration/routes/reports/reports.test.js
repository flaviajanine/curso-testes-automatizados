const supertest = require('supertest');
const express = require('express');
const routes = require('../../../../routes');

const app = new express();
app.use('/', routes);

describe('Integration test in routes', () => {
    test('GET /api/v1/documents', async () => {      
        await supertest(app).get("/api/v1/documents/")
          .expect(200)
          .then(async (response) => {
            expect(response.body[0]).toBeTruthy();
            expect(response.body[0]._id).toBeTruthy();
            expect(response.body[0].metadata).toStrictEqual({
                "properties1": "name1",
                "properties2": "name2",
                "properties3": "name3"
              });
          });
      });  
      
      test('GET /api/v1/database/?id=<given-id>', async () => {      
        await supertest(app).get("/api/v1/database/").query(
          { id: "5435435434534534534534drd5435c46" }
          )
          .expect(200)
          .then(async (response) => {
            expect(response.body).toBeTruthy();
            expect(response.text).toBeTruthy();
          });
      });  
});