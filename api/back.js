const express = require("express");
const app = express();
const { Pool } = require("pg");

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

app.get("/api/sums", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT (SELECT SUM(debit_amount) FROM money WHERE transaction_category = 'Home') AS home_debit,(SELECT SUM(debit_amount) FROM money WHERE transaction_category = 'Car') AS car_debit, (SELECT SUM(debit_amount) FROM money WHERE transaction_category = 'Pets') AS pets_debit,(SELECT SUM(debit_amount) FROM money WHERE transaction_category = 'Food') AS food_debit, (SELECT SUM(debit_amount) FROM money WHERE transaction_category = 'Electronics') AS electronics_debit, (SELECT SUM(debit_amount) FROM money WHERE transaction_category = 'School') AS school_debit, (SELECT SUM(debit_amount) FROM money WHERE transaction_category = 'Misc') AS misc_debit, (SELECT SUM(credit_amount) FROM money WHERE transaction_category = 'Home') AS home_credit, (SELECT SUM(credit_amount) FROM money WHERE transaction_category = 'Car') AS car_credit, (SELECT SUM(credit_amount) FROM money WHERE transaction_category = 'Pets') AS pets_credit, (SELECT SUM(credit_amount) FROM money WHERE transaction_category = 'Food') AS food_credit, (SELECT SUM(credit_amount) FROM money WHERE transaction_category = 'Electronics') AS electronics_credit, (SELECT SUM(credit_amount) FROM money WHERE transaction_category = 'School') AS school_credit, (SELECT SUM(credit_amount) FROM money WHERE transaction_category = 'Misc') AS misc_credit FROM money LIMIT 1;");
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/data", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM money");
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});
