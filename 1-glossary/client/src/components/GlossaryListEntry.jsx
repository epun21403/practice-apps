import React from "react";

const GlossaryListEntry = ({word}) => {
  return (
    <div>
      {`Word: ${word.word} Definition: ${word.definition}`}
    </div>
  )
}


export default GlossaryListEntry;