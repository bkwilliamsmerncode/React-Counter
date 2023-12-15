// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const countUp = (e) => {
    e.preventDefault();
    setCount(count => count + 1)
  }

  const countDown = (e) => {
    e.preventDefault();
    setCount(count => count - 1)
  }

  return (
    <>
      <div className="App">
<div id='main'>
  <div id='button1'>
        <button onClick={e => countUp(e)}>
          +
        </button>
</div>
<div id='button2' >
        <button onClick={e => countDown(e)}>
          -
        </button>
</div>
        <h1>{count}</h1>

</div>

      </div >
    </>
  );
}

export default App;
