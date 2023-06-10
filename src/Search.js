import React, { useEffect } from 'react';


const Search = ({ setState, state, setItem, item }) => {

  function handleChange(e) {
    setState(e.target.value)
  }

  const array = [{model: "iphone", description: "cool"}]

  function handleSearch(e) {
  e.preventDefault()
   const newItem = array.filter( obj => state === obj.model)
   setItem(newItem)
  }

  useEffect( () => {
    console.log(item)
  }, [item])

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="search" onChange={handleChange}/>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
