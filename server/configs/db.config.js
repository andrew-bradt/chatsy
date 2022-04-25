// Database connections
const { Pool, Client } = require("pg");
let dbConnection;

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT, DATABASE_URL } =
  process.env;

if (DATABASE_URL) {
  dbConnection = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
} else {
  dbConnection = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
  });
}

dbConnection
  .connect()
  .then(() => {
    console.log("Database connection established.");
  })
  .catch(e => {
    throw new Error(e);
  });

module.exports = dbConnection;

