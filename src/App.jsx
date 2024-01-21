import { useState } from "react";
import "./App.css";

function App() {
  const [message , setMessage] = useState('Greeting Message')
  const [input , setInput] = useState('')

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
        id="greeting-message" 
        type="text" 
        onChange={(event)=>{
          setInput(event.target.value)
        }}
        value={input}
        />
      </div>

      <div className="buttons">
        <button onClick={()=>{
          setMessage(input)
        }}>Update text</button>
      </div>
    </div>
  );
}

export default App;
