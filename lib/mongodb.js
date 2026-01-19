import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
const options = {};

let client;
let clientPromise;

if (!MONGO_URI) throw new Error("Please define MONGO_URI in .env");

if (process.env.NODE_ENV === "development") {
  // In dev mode, use global to avoid multiple connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGO_URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, connect once
  client = new MongoClient(MONGO_URI, options);
  clientPromise = client.connect();
}

export default clientPromise;
