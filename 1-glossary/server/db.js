const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/glossary');
// 2. Set up any schema and models needed by the app
const schema = new mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String
});

const Glossary = mongoose.model('Glossary', schema);

// 3. Export the models
module.exports.getAll = () => {
  return Glossary.find()
}

module.exports.postWord = (word) => {
  Glossary.create(word)
    .then(() => {
      console.log('Word added to DB');
    })
    .catch((err) => {
      console.log('Error adding word to DB', err);
    })
}

module.exports.deleteWord = (inputWord) => {
  Glossary.deleteOne(inputWord)
    .then(() => {
      console.log('Deleted from DB');
    })
    .catch((err) => {
      console.log('Error deleting from DB');
    })
}
// 4. Import the models into any modules that need them

