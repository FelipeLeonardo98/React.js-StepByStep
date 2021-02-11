import React, {useState} from 'react';
import './App.css';

function App() {
  let [cont, setCont] = useState(1);
  console.log("Here");

  const ClickHere = () => {
    setCont(cont+1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learning Hooks
        </p>
        {cont}
      <button onClick={ClickHere}>Click here</button>
       
      </header>
    </div>
  );
}

export default App;
