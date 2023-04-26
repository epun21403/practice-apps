import React from "react";
import GlossaryListEntry from "./GlossaryListEntry.jsx";

const GlossaryList = ({words}) => {

  return (
    <div>
      <h2>GlossaryList</h2>
          {words.map((word, index) => (
            <GlossaryListEntry key={index} word={word}/>
          ))}
    </div>
  )
}

export default GlossaryList;