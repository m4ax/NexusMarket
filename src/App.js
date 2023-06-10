import React, { useState } from 'react';
import Search from './Search';
import './App.css';

const App = () => {

  const [state, setState ] = useState("")
  const [ item, setItem ] = useState([{model: "chick nugg"}])
 

  return (
    <div>
      <h1>Nexus Market</h1>
      <p>This is the model: {item[0].model}</p>
      <Search setState={setState} state={state} setItem={setItem} item={item}/>
    </div>
  );
};

export default App;
