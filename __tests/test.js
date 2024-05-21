const { MongoClient } = require("mongodb");
const request = require("supertest");
const app = require("../server");
require("dotenv").config();
const client = new MongoClient(process.env.MONGODB_URI);

beforeEach(async () => {
  await client.connect();
});

afterEach(async () => {
  await client.close();
});

describe("Get/api/users", () => {
  test("should return all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(3);
  });
});
