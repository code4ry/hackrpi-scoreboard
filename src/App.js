import logo from './logo.svg';
import './App.css';

function App() {
const title = "Welcome to the RPI Scoreboard";
const likes = 50;


  return (
    <div className="App">
        <div className="content">
          <h1>{ title }</h1>
          <p> Final Results </p>
          <table>
            <tr> 
              <th>Rank </th>
              <th>Name </th>
              <th>Score </th>
            </tr>
            </table>
        </div>
    </div>
  );
}

export default App;
