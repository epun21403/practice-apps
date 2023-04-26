import React, {useState} from "react";
import { render } from "react-dom";
import AddWord from "./components/AddWord.jsx";
import AddDefinition from "./components/AddDefinition.jsx";
import GlossaryList from "./components/GlossaryList.jsx";
import GlossaryListEntry from "./components/GlossaryListEntry.jsx";


var test = [{word: 'testWord1', definition: 'testDefinition1'}, {word: 'testWord1', definition: 'testDefinition1'}, {word: 'testWord1', definition: 'testDefinition1'}, {word: 'testWord1', definition: 'testDefinition1'}]

const App = () => {

  const [words, setWords] = useState(test);
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const insertWord = (word) => {
    console.log(`${word} was inserted`);
  }

  const insertDefinition = (definition) => {
    console.log(`${definition} was inserted`);
  }

  return (
    <div>
      <h1>Glossary List</h1>
      <AddWord onType={insertWord} word={word} setWord={setWord} />
      <AddDefinition onType={insertDefinition} definition={definition} setDefinition={setDefinition} />
      <GlossaryList words={words} definition={definition} />
    </div>
  );
}

render(<App/>, document.getElementById("app"))