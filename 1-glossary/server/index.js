require("dotenv").config();
const express = require("express");
const path = require("path");
const {postWord, getAll} = require("./db");


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


app.get('/glossary', (req, res) => {
  getAll()
    .then((words) => {
      res.send(words);
    })
    .catch((err) => {
      console.log('Error recieving words');
    })
})

app.post('/glossary', (req, res) => {
  postWord(req.body)
  res.send('Word posted to DB')
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
