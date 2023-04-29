const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS data (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        sessionid VARCHAR(200),
        name VARCHAR(200),
        email VARCHAR(200),
        password VARCHAR(200),
        line1 VARCHAR(200),
        line2 VARCHAR(200),
        city VARCHAR(200),
        state VARCHAR(50),
        zipcode INT(10),
        creditcard INT(20),
        expire VARCHAR(10),
        cvv INT(10),
        billzipcode INT(10)
      )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
