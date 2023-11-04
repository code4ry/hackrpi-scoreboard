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
    setToggleState(input)
    console.log("Current Tab: " + input);
  }

  return (
    <div className="container">
      <div className = "bloc-tabs">
    
      <div className="content-tabs">

        <div className={toggleState === 1 ? "content active-content" : "content"}>
          <h2 class="changingFont">Welcome to the RPI Scoreboard</h2>
          <hr/>
          <div className="tabSpacing">
            <div
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>Main Page
            </div>
            
            <div 
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>Best Hacks
            </div>

            <div 
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}>Prize Tracks
            </div>
      </div>
          </div>
          
            
        </div>

        <div className={toggleState === 2 ? "content active-content" : "content"}>
          <h2 class="changingFont">Best Hacks</h2>
          <hr/>
          <div className="tabSpacing">
            <div
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>Main Page
            </div>
            
            <div 
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>Best Hacks
            </div>

            <div 
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}>Prize Tracks
            </div>
          </div>

          
            
        </div>
      </div>

      <div className={toggleState === 3 ? "content active-content" : "content"}>
        <h2 class="changingFont">Prize Tracks</h2>
        <hr/>
        <div className="tabSpacing">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>Main Page
          </div>
          
          <div 
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>Best Hacks
          </div>

          <div 
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}>Prize Tracks
          </div>
        </div>
          
      </div>


  </div>

    
  );
}

export default App;
