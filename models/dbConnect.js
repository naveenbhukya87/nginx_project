const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_SERVER);
exports.databaseConnect = async (dbName, collectionName) => {
    try {
        await client.connect();
        console.log("Database is connected");
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        return {
            collection, client
        };
    } catch (error) {
        console.log(error)
        return null;
    }
}