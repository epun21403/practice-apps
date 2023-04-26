import React, {useState} from "react";

const AddDefinition = ({ onType, definition, setDefinition }) => {

  const onChange = (e) => {
    setDefinition(e.target.value)
  };

  const insertDefinition = () => {
    onType(definition);
  }

  return (
    <div>
      <input onChange={onChange} value={definition}/>
      <button onClick={insertDefinition}>Insert definition</button>
    </div>
  )
}

export default AddDefinition;