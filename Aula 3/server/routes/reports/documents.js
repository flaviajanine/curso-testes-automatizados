const axios = require('axios');

documents = async (req, res) => {

  try {
    const response = await axios.get(process.env.URL);
    const documents = response.data.map((doc) => {return doc});
    res.json(documents);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = documents;
