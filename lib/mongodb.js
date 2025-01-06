import { MongoClient } from "mongodb";

// Cambia 127.0.0.1 por el nombre del servicio en Docker Compose
const uri = "mongodb://mongo:27017/logospartum_db";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;