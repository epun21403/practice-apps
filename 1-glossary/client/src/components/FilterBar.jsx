import React, {useState} from 'react';

const FilterBar = ({filterWord, setfilterWord, onSearch}) => {

  const onChangeFilter = (e) => {
    setfilterWord(e.target.value);
  }

  const filterWords = () => {
    onSearch(filterWord);
  }

  return (
    <div>
      <input onChange={onChangeFilter} value={filterWord} placeholder='filter'/>
      <button onClick={filterWords}>filter</button>
    </div>
  )
}

export default FilterBar;