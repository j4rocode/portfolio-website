import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Strona w Budowie
        </p>

        <a
          className="App-link"
          href="https://twitter.com/FutboluManiak"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Twitter
        </a>
      </header>
    </div>
  );
}

export default App;
