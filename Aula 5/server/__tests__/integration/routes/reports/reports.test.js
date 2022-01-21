const supertest = require('supertest');
const express = require('express');
const routes = require('../../../../routes');

const app = new express();
app.use('/', routes);

describe('Integration test in routes', () => {
    test('GET /api/v1/skill', async () => {      
        await supertest(app).get("/api/v1/skill/")
          .expect(200)
          .then(async (response) => {
            expect(response.body[0]).toBeTruthy();
            expect(response.body[0].skillName).toBeTruthy();
            expect(response.body[0].developers).toEqual([
              "dev name 1",
              "dev name 2"]);
          });
      }); 
      test('GET /api/v1/skills', async () => {      
        await supertest(app).get("/api/v1/skills/")
          .expect(200)
          .then(async (response) => {
            expect(response.body[0]).toBeTruthy();
            expect(response.body[0].skillName).toBeTruthy();
            expect(response.body[0].profile).toEqual({
              "technologies": [
                "React",
                "Angular",
                "CSS"
              ],
              "roles": [
                "Creation of UI for apps",
                "Enhance UI in apps"
              ]
            });
          });
      }); 
});