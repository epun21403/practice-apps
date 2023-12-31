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
        phone VARCHAR(30),
        creditcard VARCHAR(20),
        expire VARCHAR(10),
        cvv INT(10),
        billzipcode INT(10)
      )`
    )
  )
  .catch((err) => console.log(err));

  const post = (data, session_id) => {
    return db.queryAsync(
      `INSERT INTO data (
        sessionid,name,
        email,
        password,
        line1,
        line2,
        city,
        state,
        zipcode,
        phone,
        creditcard,
        expire,
        cvv,
        billzipcode
      ) VALUES (
        '${session_id}',
        '${data.name}',
        '${data.email}',
        '${data.password}',
        '${data.line1}',
        '${data.line2}',
        '${data.city}',
        '${data.state}',
        ${data.zipcode},
        ${data.phone},
        ${data.creditcard},
        '${data.expire}',
        ${data.cvv},
        ${data.billzipcode}
      )`
    )
  }
db.post = post;
module.exports = db;
