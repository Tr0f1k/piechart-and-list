const express = require("express");
const app = express();
const { Pool } = require("pg");

// Connecting to database
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "root",
  port: 5432
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// GET method that gets sums for debits and credits based on category of transaction
app.get("/api/sums", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT transaction_category AS category, SUM(debit_amount) AS debit, SUM(credit_amount) AS credit FROM money GROUP BY transaction_category;");
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET method that gets all data from database
app.get("/api/data", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM money ORDER BY transaction_id");
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//PORT setup
app.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
