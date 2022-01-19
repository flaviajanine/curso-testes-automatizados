const find = require('../../lib/client/find');

database = async (req, res) => {
  try {
      const query = { _id: req.query.id };
      const result = await find(query);
      res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = database;
