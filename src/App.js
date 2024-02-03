

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
 

  const [counter, setCounter] = useState(0);
  const [counterIncremented, setcounterIncremented] = useState(0);
  console.log(counterIncremented);
  function IncOnClick(x) {
    setCounter(counter + x);
    setcounterIncremented(counterIncremented + x);
    console.log(`your fat wallet has ${counter}`);
    <h1> your wallet {counter}</h1>;

    
  }

 
  function AddPerSec(num) {
    setInterval(() => {
      setCounter((prev) => prev + num);
    }, 1000);
  }

  function DoubleOrEverything() {
    if (counter > 1 && counter < 10) {
      return (
        <button onClick={() => IncOnClick(2)}>money! </button>
      );
    }
    if (counter > 10 && counter < 20) {
      return (
        <button onClick={() => IncOnClick(4)}>
          alot money
        </button>
      );
    }
    if (counter > 20 && counter < 30) {
      return (
        <button onClick={() => IncOnClick(8)}>
          wow!
        </button>
      );
    }

    if (counter > 30 && counter < 40) {
      return (
        <button onClick={() => IncOnClick(8)}>
         alomost close!
        </button>
      );
    }
    if (counter > 40 && counter < 50) {
      return (
        <button onClick={() => IncOnClick(8)}>yay! </button>
      );
    }
    if (counter > 50 && counter < 60) {
      AddPerSec(1);
      alert("at this point your money works for you");
      return (
        <button onClick={() => IncOnClick(8)}>
          happy!
        </button>
       
      );
    }
    if (counter > 60 && counter < 70) {
      return (
        <button onClick={() => IncOnClick(8)}>
       wow!
        </button>
      );
    }

    
    if (counter > 70 && counter < 80) {
      return (
        <div>
          <button onClick={() => IncOnClick(8)}>
           hahaha!
          </button>
          {alert(
            "congratulations you won now go make that cheddar and please spare me some change"
          )}
         
        </div>
      );
    }
    
    else {
      return (
        <button onClick={() => IncOnClick(1)}>malioner</button>
      );
    }
  }

  
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>
      
        <h1>your wallet has {counter}</h1>
      </div>
      {DoubleOrEverything()}

     
    </div>
    
  );
}

export default App;

