

import React, { useState } from 'react';


function App() {
  const[count,setCount]=useState(0);
  function add(){
    setCount(count+1);
  }
  return(
    <div>
      <h1> {count}</h1>
      <button onClick={add} >count </button>   </div>
  );
  
}

export default App;
