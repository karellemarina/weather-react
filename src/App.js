import logo from "./logo.svg";
import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Weather App</h1>
        <Weather />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
