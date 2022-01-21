const axios = require('axios');

skills = async (req, res) => {

  try {
    const response = await axios.get('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills');
    const skills = response.data.map((skill) => { return skill });
    res.json(skills);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = skills;
