const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
import { configDotenv } from "dotenv";

app.use(express.json());

async function main() {
  const uri =
    "mongodb+srv://xrssun:3W0uGdjh5gec8dKX@cluster0.z60yugb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("database connected");
    // const fetched = await getProducts(client);
    // return fetched;

    // await insertExercise(client, {
    //   exercise_id: 2,
    //   exercise_name: "waling",
    //   distance: 0,
    // });

    // await insertActivity(client, [
    //   { activity_id: 1, exercise_name: "running", user_id: 3, distance: null },
    // ]);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function getProducts(client) {
  const result = await client
    .db("store")
    .collection("products")
    .find({})
    .toArray();
  return result;
}

async function insertExercise(client, newExercise) {
  const result = await client
    .db("trailblaze")
    .collection("exercise")
    .insertOne(newExercise);
  console.log(`Exercise added ${result.insertedId}`);
}

async function insertActivity(client, newActivities) {
  const result = await client
    .db("trailblaze")
    .collection("activity")
    .insertMany(newActivities);

  console.log(`${result.insertedCount} new activities added `);
  console.log(`${result.insertedIds}`);
}

async function getAllUsers(client) {
  const result = await client.db("trailblaze").collection("users").toArray();
}

main().catch(console.error);

app.get("/", async (req, res) => {
  // const tosend = await main();
  // res.send({ tosend });
  res.status(200).send("hello world!!");
});

app.listen(9090, () => console.log("App listening on port 9090!"));
