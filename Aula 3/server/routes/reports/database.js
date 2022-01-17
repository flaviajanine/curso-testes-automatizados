const Client = require('../../lib/client/mongoClient');

database = async (req, res) => {
  try {
      const query = { _id: req.query.id };
      const client = new Client();
      const result = await client.find(query);
      res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = database;
