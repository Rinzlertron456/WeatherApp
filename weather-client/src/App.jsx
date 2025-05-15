import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { MdBookmark } from "react-icons/md";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
function App() {
  const [dateTimes, setDateTimes] = useState([]);
  const tempData = [
    // { name: "Jan", temp_max: 2400, temp_min: 3400 },
    // { name: "Feb", temp_max: 1398, temp_min: 2210 },
    // { name: "Mar", temp_max: 9800, temp_min: 2290 },
    // { name: "Apr", temp_max: 3908, temp_min: 4000 },
    // { name: "May", temp_max: 4800, temp_min: 4600 },
    // { name: "Jun", temp_max: 3800, temp_min: 3000 },
    // { name: "Jul", temp_max: 4300, temp_min: 3800 },
    // { name: "Aug", temp_max: 5300, temp_min: 4600 },
    // { name: "Sep", temp_max: 3200, temp_min: 2500 },
    // { name: "Oct", temp_max: 6000, temp_min: 4900 },
    // { name: "Nov", temp_max: 5200, temp_min: 4700 },
    // { name: "Dec", temp_max: 4100, temp_min: 3500 },
  ];

  const api_key = "5618379e9ee8c75fd2f91290fddd98df";
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${"Hyderabad"}&appid=${api_key}`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        let newDateTimes = [];

        data.list.forEach((ele) => {
          const humidity = ele.main.humidity;
          tempData.push({ humidity: humidity });
          // const dateTime = new Date(ele.dt_txt);
          // let [date, time] = dateTime
          //   .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
          //   .split(",");
          // let obj = { date: date, time: [time] };
          // let existingDateTime = newDateTimes.find((dT) => dT.date === date);
          // existingDateTime
          //   ? existingDateTime.time.push(time)
          //   : newDateTimes.push(obj);
        });

        // setDateTimes(newDateTimes);
      })
      .catch((err) => console.log(err));
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
            <div className="scatter-chart">
              <ResponsiveContainer>
                <LineChart
                  width={730}
                  height={250}
                  data={tempData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="humidity"
                    stroke="black"
                    strokeWidth={"5px"}
                  />
                  {/* <Line type="monotone" dataKey="temp_min" stroke="#82ca9d" /> */}
                </LineChart>
              </ResponsiveContainer>
            </div>
            {/* {dateTimes.map((dT, index) => {
              return (
                <div className="date-times" key={index}>
                  <div className="date">
                    <p>{dT.date}</p>
                    {dT.time.map((t, i) => {
                      return (
                        <div className="time" key={i}>
                          <p>{t}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
