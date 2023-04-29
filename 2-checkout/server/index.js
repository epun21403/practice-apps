require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);
app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/checkout', (req, res) => {
  res.send('GET test')
})

app.post('/checkout', (req, res) => {
  console.log('Data to be posted', req.body, req.session_id);
  var data = req.body;
  var sql =
  `INSERT INTO data (sessionid,name,email,password,line1,line2,city,state,zipcode,creditcard,expire,cvv,billzipcode)
  VALUES ('${req.session_id}','${data.name}','${data.email}','${data.password}','${data.line1}','${data.line2}','${data.city}','${data.state}',${data.zipcode},
    ${data.creditcard},'${data.expire}',${data.cvv},${data.billzipcode})`;
  db.queryAsync(sql);
  res.json('Post request completed');
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
