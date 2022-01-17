const { MongoClient } = require('mongodb');

class Client {
    constructor() {
        this.db_name = process.env.MONGO_DB_NAME;
        this.collection_name = process.env.MONGO_COLLECTION_NAME;
      }

      connect = async () => {
        return await MongoClient.connect(process.env.MONGO_URL);
      }

      getCollection = async () => {
        const connection = await this.connect();
        return connection.db(
            this.db_name).collection(this.collection_name);
      }
      find = async (query) => {
        const collection = await this.getCollection();
        return await collection.find(query).toArray();
      }
}

module.exports = Client;