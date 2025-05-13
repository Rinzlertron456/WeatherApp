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
            <h1 className="title">Weather App</h1>
            <div className="search">
              <FiSearch />
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
