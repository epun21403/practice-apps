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
    .then((data) => {
      console.log('Get all words from DB ', data);
    })
    .catch((err) => {
      console.log('Error getting words from DB ', err);
    })
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
// 4. Import the models into any modules that need them

