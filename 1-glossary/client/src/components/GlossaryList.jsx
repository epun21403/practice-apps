import React from "react";
import GlossaryListEntry from "./GlossaryListEntry.jsx";

const GlossaryList = ({words, handleDelete}) => {

  return (
    <div>
      <h2>GlossaryList</h2>
          {words.map((word) => (
            <GlossaryListEntry key={word.word} word={word} handleDelete={handleDelete}/>
          ))}
    </div>
  )
}

export default GlossaryList;