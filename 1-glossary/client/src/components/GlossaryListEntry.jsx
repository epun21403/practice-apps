import React from "react";

const GlossaryListEntry = ({word, handleDelete}) => {

  return (
    <div style={{
        border: '1px solid grey',
        borderRadius: '5px',
        paddingLeft: '10px',
        paddingTop: '5px',
        paddingBottom: '5px'
      }}>
      {`word: ${word.word} definition: ${word.definition}`}
      <button style={{
          position: 'relative',
          float: 'right',
          borderRadius: '5px'
        }} onClick={() => handleDelete(word.word)}>Delete me</button>
    </div>
  )
}


export default GlossaryListEntry;