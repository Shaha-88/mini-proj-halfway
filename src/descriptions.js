//\\ بسم الله الرحمن الرحيم //\\

// 1st description

// You're building a Clicker Game! These are fun...

// Most clicker games have similar elements in common. These will be the requirements for this project.

// In clicker games, the player clicks a button to gain some currency (dollars, cookies, etc), the player can spend that currency on purchases that generate that currency every second, or generate more currency every time they click the button.

// There's usually two types of purchases: buildings and upgrades.

{
  /* <button onClick={IncOnClick}>increment</button> */
}

// A building is usually something that grants currency per second. You can buy it many times. Each time you purchase it, its price increases, and it continues to grant currency per second.

// An upgrade is something you purchase only once. It's usually unlocked after purchasing a certain number of a building, and it multiplies the effect of that building. So for example, you could purchase 10 of a building, that would unlock an upgrade to double the effect of that building.

// Those are the core aspects of a clicker game. You can use these two games as inspiration of how you can build one:

// IGRS

// Idle Hero

// And here's the game that popularized the genre for inspiration:

// Cookie Clicker

// Try not to get distracted actually playing this game, and start building your own!

// Another direction you can take the game is, let the user click to damage a monster, and once the monster's health is depleted, the player gets gold or money, and another monster appears. The buildings they purchase with the gold would increase the damage done to the monster with every click, or do damage to the monster every second, and the upgrades would multiply the damage done.

// Some games that follow this direction would display those buildings as "Heroes" that attack the monster. And instead of "buying" the building, you'd "hire" the hero the first time, then everytime you purchase it again you're "levelling up" that hero.

// It's up to your creativity and imagination how you want to build this game.

// 2nd description

// The button can be a normal button, or an image that follows the theme of the game.
// Currency can be dollars, gold, fils, or anything like that that neatly follows the theme of the game.
// If you're battling monsters, clicking the button doesn't have to grant currency, but you gain currency once the monster dies.

// 3rd description

// The price of this building should be reasonably attainable when first starting the game.
// If you're battling monsters, this building would increase the damage the player does per click.

// Feel free to change this and make it into an upgrade. It's up to you how you want to build this feature, as long as the player can increase the effect of their click.

// 4th description

// The price of the first building should be reasonably attainable when first starting the game.
// If you're battling monsters, this would be a hero to hire. Once hired, subsequent purchases would level up this hero. Leveling up this hero would increase damage done to the monster per second.

// 5th description

// The player can purchase many upgrades. Each upgrade costs currency. You can decide how much an upgrade costs and how much it multiplies the effect of a building.

// Upgrades may also have various effects that assist the player in their progress. For example, an upgrade may multiply the currency received per click, or maybe would decrease the price of buildings, or anything you could think of to assist the player in creative ways to make the game more interesting and fun to play.

// For example, you could create an upgrade that costs 500 currency that would multiply the effect of the first building by x3.5.

// If you're battling monsters, those upgrades could multiply the damage heroes do per second.

// 6th description

// Player can see how much currency they have (20)

// 7th description

// If you're battling monster, this would display the damage done per second.
//
//\\ بسم الله الرحمن الرحيم //\\

// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   // workp2
//   // const [input, setInput] = useState("");
//   // const search = (e) => {
//   //   setInput(e.target.value);
//   // };
//   // for checking print
//   // console.log(input);
//   // for checking print

//   // workp2

//   const [counter, setCounter] = useState(0);
//   const [counterIncremented, setcounterIncremented] = useState(0);
//   console.log(counterIncremented);
//   function IncOnClick(x) {
//     setCounter(counter + x);
//     setcounterIncremented(counterIncremented + x);
//     console.log(`your fat wallet has ${counter}`);
//     <h1> your fat wallet has {counter}</h1>;
//     // DoubleOrEverything(counter);
//   }

//   // function DoubleOrEverything() {
//   //   setcounterIncremented(counterIncremented * 2);
//   //   console.log(`your fat vault has ${counterIncremented}`);
//   //   <h1> your fat wallet has {counterIncremented}</h1>;
//   // }
//   //} else if (counter > 10) {

//   //here
//   //   return <button>fort knox is overstocked</button>;
//   // } else if (counter > 100) {
//   //   return (
//   //     <button>bruce wayne just might consider a job in sanitation</button>
//   //   );
//   // } else if (counter > 1000) {
//   //   return <button>donald trump keeps blaming you for everything</button>;
//   // } else if (counter > 10000) {
//   //   return <button>tony stark is currently doing your laundry</button>;
//   // } else if (counter > 100000) {
//   //   return <button>elon musk keeps calling to borrow gas money</button>;
//   // } else if (counter > 1000000) {
//   //   return <button>at this point you should start sneezing benjies</button>;
//   // } else if (counter > 10000000) {
//   //   return <button>is your name Daisuke Kambe</button>;

//   function DoubleOrEverything() {
//     if (counter > 1 && counter < 10) {
//       return (
//         <button onClick={() => IncOnClick(2)}>money! money! money!</button>
//       );
//     }
//     if (counter > 10) {
//       return (
//         <button onClick={() => IncOnClick(4)}>
//           elon musk keeps calling to borrow gas money
//         </button>
//       );
//     } else {
//       return (
//         <button onClick={() => IncOnClick(1)}>make a lot of money!</button>
//       );
//     }
//   }

//   function QuadOrEverything() {
//     if (counter > 20) {
//       return <button>at this point you should start sneezing benjies</button>;
//     } else {
//       return (
//         <button onClick={IncOnClick * 3}>
//           does your greed knows no limits?
//         </button>
//       );
//     }
//   }

//   return (
//     <div>
//       <div></div>
//       <h1>your fat wallet has {counter}</h1>

//       {DoubleOrEverything()}
//       {/* <h1>your fat vault has {counterIncremented * 2}</h1>
//       <button onClick={IncOnClick}>make a lot of money!</button>
//       <h1>your fat vault has {counterIncremented * 3}</h1>
//       <button onClick={IncOnClick}>
//         your first step to make jeff bezos your butler starts here
//       </button>
//       <h1>your fat vault has {counterIncremented * 4}</h1>
//       <button onClick={IncOnClick}>
//         elon musk keeps calling to borrow gas money
//       </button>
//       <h1>your fat vault has {counterIncremented * 5}</h1>
//       <button onClick={IncOnClick}>
//         tony stark is currently doing your laundry
//       </button>
//       <h1>your fat vault has {counterIncremented * 6}</h1>
//       <button onClick={IncOnClick}>
//         donald trump keeps blaming you for everything
//       </button> */}
//       {/* <input type="text" placeholder="Search.." onChange={search} /> */}
//       {/* <h1>your latest search is {input}</h1> */}
//       {/* <search>onChange={search}</search> */}
//     </div>
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

// // //\\ بسم الله الرحمن الرحيم //\\

// // import logo from "./logo.svg";
// // import "./App.css";

// // function App() {
// //   return (
// //     <div></div>

// //     // <div className="App">
// //     //   <header className="App-header">
// //     //     <img src={logo} className="App-logo" alt="logo" />
// //     //     <p>
// //     //       Edit <code>src/App.js</code> and save to reload.
// //     //     </p>
// //     //     <a
// //     //       className="App-link"
// //     //       href="https://reactjs.org"
// //     //       target="_blank"
// //     //       rel="noopener noreferrer"
// //     //     >
// //     //       Learn React
// //     //     </a>
// //     //   </header>
// //     // </div>
// //   );
// // }

// // export default App;
