require("dotenv").config();
const express = require("express");
const path = require("path");
const {postWord, getAll, deleteWord} = require("./db");


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.get('/glossary', (req, res) => {
  getAll()
    .then((words) => {
      console.log('GET server ', words)
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

app.delete('/glossary', (req, res) => {
  deleteWord(req.body)
  res.send('Deletion successful')
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
