import logo from './logo.svg';
import './App.css';
import { NamePrompt } from './components/Forms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Welcome to Abe's Bookshelf Sorter!</h1>
          <NamePrompt />
        </p>
      </header>
    </div>
  );
}

export default App;
