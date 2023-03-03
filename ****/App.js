import logo from "./logo.svg";
import { useState } from "react";
 
import "./App.css";

function App() {

  let date = new Date(Date.now).toLocaleTimeString();

  
  const [currentTime, setCurrentTime] = useState(date);

  setInterval(() => {
    setCurrentTime(date);
  }, 100);

  return (
    <div className="App">
      <header className="App-header">
      {date}
      </header>
    </div> 
  );
}

export default App;
