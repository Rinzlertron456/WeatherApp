import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { MdBookmark } from "react-icons/md";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const api_key = "5618379e9ee8c75fd2f91290fddd98df";
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${"Hyderabad"}&appid=${api_key}`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <img className="temp-icon" src="./clear.png" alt="Clear Sky" />
            <div className="temp-details">
              <h1 className="temp">25°</h1>
              <h2 className="location">New York</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
