//\\ بسم الله الرحمن الرحيم //\\

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // workp2
  // const [input, setInput] = useState("");
  // const search = (e) => {
  //   setInput(e.target.value);
  // };
  // for checking print
  // console.log(input);
  // for checking print

  // workp2

  const [counter, setCounter] = useState(0);
  const [counterIncremented, setcounterIncremented] = useState(0);
  console.log(counterIncremented);
  function IncOnClick(x) {
    setCounter(counter + x);
    setcounterIncremented(counterIncremented + x);
    console.log(`your fat wallet has ${counter}`);
    <h1> your fat wallet has {counter}</h1>;

    // if (counter > 100) {
    //   counter = counter + 1;
    // }
    // const [timer, setTimer] = useState(0);

    // function StartTimer(counter) {
    //   if (counter > 100) {
    //     setTimer(timer + 1);
    //     counter = counter + 1;
    //   }
    // }

    // DoubleOrEverything(counter);
  }

  // function DoubleOrEverything() {
  //   setcounterIncremented(counterIncremented * 2);
  //   console.log(`your fat vault has ${counterIncremented}`);
  //   <h1> your fat wallet has {counterIncremented}</h1>;
  // }
  //} else if (counter > 10) {

  //here
  //   return <button>fort knox is overstocked</button>;
  // } else if (counter > 100) {
  //   return (
  //     <button>bruce wayne just might consider a job in sanitation</button>
  //   );
  // } else if (counter > 1000) {
  //   return <button>donald trump keeps blaming you for everything</button>;
  // } else if (counter > 10000) {
  //   return <button>tony stark is currently doing your laundry</button>;
  // } else if (counter > 100000) {
  //   return <button>elon musk keeps calling to borrow gas money</button>;
  // } else if (counter > 1000000) {
  //   return <button>at this point you should start sneezing benjies</button>;
  // } else if (counter > 10000000) {
  //   return <button>is your name Daisuke Kambe</button>;
  //here
  function AddPerSec(num) {
    setInterval(() => {
      setCounter((prev) => prev + num);
    }, 1000);
  }
  //here
  function DoubleOrEverything() {
    if (counter > 1 && counter < 10) {
      return (
        <button onClick={() => IncOnClick(2)}>money! money! money!</button>
      );
    }
    if (counter > 10 && counter < 20) {
      return (
        <button onClick={() => IncOnClick(4)}>
          elon musk keeps calling to borrow gas money
        </button>
      );
    }
    if (counter > 20 && counter < 30) {
      return (
        <button onClick={() => IncOnClick(8)}>
          bruce wayne just might consider a job in sanitation
        </button>
      );
    }

    if (counter > 30 && counter < 40) {
      return (
        <button onClick={() => IncOnClick(8)}>
          at this point you should start sneezing benjies
        </button>
      );
    }
    if (counter > 40 && counter < 50) {
      return (
        <button onClick={() => IncOnClick(8)}>fort knox is overstocked </button>
      );
    }
    if (counter > 50 && counter < 60) {
      AddPerSec(1);
      alert("at this point your money works for you");
      return (
        <button onClick={() => IncOnClick(8)}>
          donald trump keeps blaming you for everything
        </button>
        // setInterval(function (counter)=> {counter =counter+1}, 1000);

        // setInterval({counter =counter+1}, 1000);
      );
    }
    if (counter > 60 && counter < 70) {
      return (
        <button onClick={() => IncOnClick(8)}>
          tony stark is currently doing your laundry
        </button>
      );
    }

    // setInterval(function () {element.innerHTML += "Hello"}, 1000);
    // && counter < 80
    if (counter > 70 && counter < 80) {
      return (
        <div>
          <button onClick={() => IncOnClick(8)}>
            is your name Daisuke Kambe
          </button>
          {alert(
            "congratulations you won now go make that cheddar and please spare me some change"
          )}
          {/* {(counter = counter + 1)} */}
        </div>
      );
    }
    //
    //
    //
    //
    //
    else {
      return (
        <button onClick={() => IncOnClick(1)}>greetings mister cash</button>
      );
    }
  }

  // function QuadOrEverything() {
  //   if (counter > 20) {
  //     return <button>at this point you should start sneezing benjies</button>;
  //   } else {
  //     return (
  //       <button onClick={IncOnClick * 3}>
  //         does your greed knows no limits?
  //       </button>
  //     );
  //   }
  // }

  //
  //
  //
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
        {/* {AddPerSec()}  */}
        <h1>your fat wallet has {counter}</h1>
      </div>
      {DoubleOrEverything()}

      {/* <h1>your fat vault has {counterIncremented * 2}</h1>
      <button onClick={IncOnClick}>make a lot of money!</button>
      <h1>your fat vault has {counterIncremented * 3}</h1>
      <button onClick={IncOnClick}>
        your first step to make jeff bezos your butler starts here
      </button>
      <h1>your fat vault has {counterIncremented * 4}</h1>
      <button onClick={IncOnClick}>
        elon musk keeps calling to borrow gas money
      </button>
      <h1>your fat vault has {counterIncremented * 5}</h1>
      <button onClick={IncOnClick}>
        tony stark is currently doing your laundry
      </button>
      <h1>your fat vault has {counterIncremented * 6}</h1>
      <button onClick={IncOnClick}>
        donald trump keeps blaming you for everything
      </button> */}
      {/* <input type="text" placeholder="Search.." onChange={search} /> */}
      {/* <h1>your latest search is {input}</h1> */}
      {/* <search>onChange={search}</search> */}

      {/* alert */}
      {/* {if (counter>100){
alert("Hello! I am an alert box!!");
      }} */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

// //\\ بسم الله الرحمن الرحيم //\\

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div></div>

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
