// Let's connect to MongoDB and do some cool stuffs

// Import our library (just tools we need)
import { MongoClient } from "mongodb";

// Import our credentials to connect
import { uri } from "./secrets.js";

// Connect to our Mongo server
const client = new MongoClient(uri)

// Create a reference to our database / collection...
const db = client.db("mongo0");

// Let's add a document to our collection...

// Let's create a piece of furniture
const stool = {
    name: 'Ergo stool',
    brand: 'Autonomous',
    color: 'Evergreen',
    price: '169.00',
    warrent: '2 years'
}
const table = {
    name: 'Ergo table',
    brand: 'Autonomous',
    color: 'Brown',
    price: '200.00',
    warrent: '1 years'
}

async function addOneItem(item){
    await db.collection("items").insertOne(item)
    console.log("Item was added");
}

addOneItem(stool)
addOneItem(table)