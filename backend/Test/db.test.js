// tests/db.test.js
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";

describe("MongoDB Connection", () => {
  beforeAll(async () => {
    // Connect to the database before running tests
    await connectDB();
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    await mongoose.connection.close();
  });

  it("should connect to MongoDB successfully", () => {
    // Check if the connection is established
    expect(mongoose.connection.readyState).toBe(1); // 1 means connected
  });

  it("should have the correct database name", () => {
    expect(mongoose.connection.name).toBe("test");
  });
});
