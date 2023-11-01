import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import BestHack from './BestHack';
import { useState } from "react";


function App() {
  const title = "Welcome to the RPI Scoreboard";
  const likes = 50;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (input) => {
    console.log("Current Tab: " + input);
  }

  return (
    <div className="App">
        <div className="content">

          <h1>{ title }</h1>
          <div class="tab">
            <button class="tablinks" onClick= {() => toggleTab(2)}>Best Hack</button>
            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>
            <div id="BestHack" class="tabcontent">
             <h3>Best Hack</h3>
              <p>Name: Neil</p>
          </div>
        </div>
          </div>
          <p> Final Results </p>
          <table>
            <tr>
              <th>Rank </th>
              <th>Name </th>
              <th>Score </th>
            </tr>
            </table>
        </div>
        <NavBar />
        <div className="content">
        </div>
    </div>
  );
}

export default App;
