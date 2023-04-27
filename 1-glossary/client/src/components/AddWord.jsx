import React, {useState} from "react";

const AddWord = ({ onSearch, word, setWord, definition, setDefinition  }) => {

  const onChangeWord = (e) => {
    setWord(e.target.value);
  }

  const onChangeDefinition = (e) => {
    setDefinition(e.target.value);
  }

  const insertWord = () => {
    onSearch(word, definition);
  }

  return (
    <div>
      <input onChange={onChangeWord} value={word} placeholder='word'/>
      <br></br>
      <input onChange={onChangeDefinition} value={definition} placeholder='definition'/>
      <button onClick={insertWord}>Add word to glossary</button>
    </div>
  )
}

export default AddWord;