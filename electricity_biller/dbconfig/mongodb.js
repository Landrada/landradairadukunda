const {MongoClient} = require('mongodb');

async function main() {
	const uri = "mongodb+srv://elecat:5Jq3aW1odbhtMeYk@electricity_Cat/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect()
}

require('./../models/token.model')