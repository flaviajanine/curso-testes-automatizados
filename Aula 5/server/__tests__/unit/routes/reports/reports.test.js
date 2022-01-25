const supertest = require('supertest');
const express = require('express');
const routes = require('../../../../routes');

const axios = require('axios');

const app = new express();
app.use('/', routes);

jest.mock('axios');

const skill = {
  data: [{
    skillName: 1,
    developers: [],
    profile: {}
  }]
};
axios.get.mockResolvedValueOnce(skill);

test('GET /api/v1/skill', async () => {
  await supertest(app).get("/api/v1/skill/")
    .expect(200)
    .then(async (response) => {
      expect(response.body[0]).toBeTruthy();
      expect(response.body[0].skillName).toBeTruthy();
      expect(response.body[0].developers).toEqual([]);
    });
});

const skills = {
  data: [{
    skillName: "name",
    developers: [],
    profile: {
      "technologies": [
        "React",
        "Angular",
        "CSS"
      ],
      "roles": [
        "Creation of UI for apps",
        "Enhance UI in apps"
      ]
    }
  }]
};
axios.get.mockResolvedValueOnce(skills);

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