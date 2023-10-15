import logo from './logo.svg';
import './App.css';
import CounterView from './Components/CounterView';
import { CounterProvider } from './context/CounterContext';
import CounterUpdate from './Components/CounterUpdate';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <CounterView />
        <CounterUpdate />
      </div>
    </CounterProvider>
  );
}

export default App;
