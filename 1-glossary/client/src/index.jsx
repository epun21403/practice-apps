import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import AddWord from "./components/AddWord.jsx";
import GlossaryList from "./components/GlossaryList.jsx";
import GlossaryListEntry from "./components/GlossaryListEntry.jsx";
import axios from 'axios';
import FilterBar from "./components/FilterBar.jsx";

const App = () => {

  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [filterWord, setfilterWord] = useState('')

  const getFunction = () => {
    axios.get('http://127.0.0.1:3000/glossary')
    .then((data) => {
      setWords(data.data);
    })
    .catch((err) => {
      console.log('Fetching error client')
    })
  }

  useEffect(() => {
    getFunction()
  }, []);

  const insertWord = (word, definition) => {
    console.log(`${word} was inserted`);
    axios.post('http://127.0.0.1:3000/glossary', {
      word: word,
      definition: definition
    })
    .then(() => {
      console.log('Posted word');
      getFunction();
    })
    .catch((err) => {
      console.log('Error in posting word')
    })
  }

  const filterWords = (input) => {
    const newArray = words.filter((word) => {
      return word.word.includes(input);
    })
    setWords(newArray);
  }

  return (
    <div>
      <h1>BudgetGlossary</h1>
      <AddWord onSearch={insertWord} word={word} setWord={setWord} definition={definition} setDefinition={setDefinition} />
      <br></br>
      <FilterBar filterWord={filterWord} setfilterWord={setfilterWord} onSearch={filterWords}/>
      <GlossaryList words={words} />
    </div>
  );
}

render(<App/>, document.getElementById("app"))