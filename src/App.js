import styled from 'styled-components';
import './style/App.css'


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <b>Where in the world?</b>
          <button>Dark mode</button>
        </nav>
      </header>
      <main>
        <div className="searchContainer">
          <input placeholder='Search for a country...' type='text'></input>
          <select>
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
        <div className="countriesContainer">
        </div>
      </main>
    </div>
  );
}

export default App;
