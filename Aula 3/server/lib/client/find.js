const { MongoClient } = require('mongodb');


const db_name = process.env.MONGO_DB_NAME;
const collection_name = process.env.MONGO_COLLECTION_NAME;

connect = async () => {
  return await MongoClient.connect(process.env.MONGO_URL);
}

getCollection = async () => {
  const connection = await connect();
  return connection.db(
      db_name).collection(collection_name);
}
find = async (query) => {
  const collection = await getCollection();
  return await collection.find(query).toArray();
}

module.exports = find;