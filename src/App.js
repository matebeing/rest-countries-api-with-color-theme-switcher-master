
function App() {
  return (
    <div className="App">
      <header>
        <b>Where in the world?</b>
        <button>Dark mode</button>
      </header>
      <main>
        <div className="searchContainer">
          <input type='text'></input>
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
