const axios = require('axios');

skill = async (req, res) => {

  try {
    const response = await axios.get('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skill');
    const skill = response.data;
    res.json(skill);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = skill;
