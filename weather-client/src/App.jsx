import { useState } from "react";
import "./App.css";
import { FiSearch } from "react-icons/fi";
import { MdBookmark } from "react-icons/md";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="weather-app">
        <div className="container">
          <header className="weather-header">
            <div className="saved">
              <MdBookmark />
            </div>
            <div className="search">
              <FiSearch />
            </div>
          </header>
          <div className="weather-card">
            <div className="weather-card-header">
              <h1>Weather</h1>
              <h2>Location</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
