import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import BestHack from './BestHack';
import { useState } from "react";
import './table.css'
import image from './F0r0tPrXsAIt0u6.png'

const prizes = [
  {title: "Best In Patient Safety Tech", name: "A"},
  {title: "Best AI Hack", name: "B"},
  {title: "Best Cybersecurity Hack", name: "C"},
  {title: "Best Education Hack", name: "D"},
  {title: "Best Sustainability Hack", name: "E"},
  {title: "Best Mobile Hack", name: "F"},
  {title: "Best Data Science", name: "G"},
  {title: "Best Startup", name: "H"},
  {title: "Best First Time Hack", name: "I"},
  {title: "Ugliest Code Competition...", name: "J"}
]



const Row = (props) => {
  const {title, name} = props
  return(<tr>
    <td>{title}</td>
    <td>{name}</td>
  </tr>)
}

const Table = (props) => {
  const {data} = props
  return(
  <table>
    <tbody>
      {data.map(row => 
        <Row title = {row.title}
        name = {row.name}/>
        )}
    </tbody>

  </table>
  )
}


function App() {
  const title = "Welcome to the RPI Scoreboard";
  const likes = 50;

  const [toggleState, setToggleState] = useState(1);

  const [rows, setRows] = useState(prizes)

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
          <div className="image">
            <img src={image} alt="HackRPI Image" height = {300} width = {600} />
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
          <div className="BestHack">
            <h2>Best Hack</h2>
            <hr/>
            <table className="BHtable">
              <tr>
                <td>Person 1</td>
              </tr>
            </table>
          </div>
          <div className="SecondBestHack">
            <h2>Second Best Hack</h2>
            <hr/>
            <table className="BH2table">
              <tr>
                <td>Person 2</td>
              </tr>
            </table>
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
          
        <div className={toggleState === 3 ? "content active-content" : "content"}>
          <h2>Final Results</h2>
          <hr/>
          <Table data = {rows} />
        </div>
      </div>

      


  </div>

    
  );
}

export default App;
