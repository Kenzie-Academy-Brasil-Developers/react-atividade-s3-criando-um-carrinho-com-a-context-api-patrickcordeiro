import "./App.css";
import Counter from "./components/Counter";
import CounterControls from "./components/CounterControls";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <CounterControls />
      </header>
    </div>
  );
}

export default App;
