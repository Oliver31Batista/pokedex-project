import './App.css';
import Navbar from './components/Navbar.jsx'
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
