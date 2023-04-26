import React, {useState} from "react";

const AddWord = ({ onType, word, setWord }) => {

  const onChange = (e) => {
    setWord(e.target.value);
  }

  const insertWord = () => {
    onType(word);
  }

  return (
    <div>
      <input onChange={onChange} value={word} />
      <button onClick={insertWord}>Add word to glossary</button>
    </div>
  )
}

export default AddWord;