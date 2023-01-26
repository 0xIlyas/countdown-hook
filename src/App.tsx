import CountdownTimer from "./components/CountdownTimer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const THREE_DAYS_IN_MS = 30 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Countdown Timer</h1>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </header>
    </div>
  );
}

export default App;
