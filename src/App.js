import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Weather App</h1>
        <Weather />
        <p>
          <a
            className="App-link"
            href="https://github.com/karellemarina/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open sourced
          </a>
          , by{" "}
          <a
            className="App-link"
            href="https://www.shecodes.io/graduates/118933-karelle-bolon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karelle Bolon
          </a>{" "}
          from{" "}
          <a
            className="App-link"
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SheCodes
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
