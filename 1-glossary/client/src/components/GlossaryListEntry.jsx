import React from "react";

const GlossaryListEntry = ({word}) => {
  return (
    <div>
      {`word: ${word.word} definition: ${word.definition}`}
    </div>
  )
}


export default GlossaryListEntry;