import { useState } from 'react';
import './App.css';

function App() {

const [ count , setCount] = useState(0)
  function IncNum(){
    setCount(count + 1)

  }
  function DecNum(){
    setCount(count - 1)

  }
  return (
    <div className="App">
  
    <h1> {count}</h1>
    <button onClick={IncNum}> Increase</button>
    <button onClick={DecNum}> Decrease</button>
    </div>



  );
}

export default App;
