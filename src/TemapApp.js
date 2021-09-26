import React, { useEffect, useState } from "react";
import "./index.css";
import { Cloud, WbSunny, Search } from "@material-ui/icons";
// import
const TempApp = () => {
  // usestate for set value
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pakistan");

  const GetValue = (e) => {
    setSearch(e.target.value);
  };
  // fetchapi function
  const fetchWeather = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b1421e53083d701e90577b632d3411d8`;
    const response = await fetch(url);
    const resjson = await response.json();
    console.log(resjson);
    setCity(resjson);
  };
  useEffect(() => {
    fetchWeather();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputdata">
          <h1>
            <span>Live</span> Weather
          </h1>
          <input
            // onChange={GetValue}
            type="search"
            className="inputField mt-4"
          />
          <button className='btn btn-secondary' onClick={GetValue}><Search/></button>
        </div>
        {!city ? (
          <>
            <div className="info">
              <h2 className="location">
                <h1>No Data Found</h1>
              </h2>
            </div>
          </>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <Cloud className="cloud" />
                <WbSunny className="wbcloudy" />
                <h1>{search}</h1>
              </h2>
              {/* <h1>5.250°C</h1> */}
              <h1>{city.main.temp}°Cel</h1>
              <p>
                Min : {city.main.temp_min}°Cel | Max : {city.main.temp_max}°Cel{" "}
              </p>
              <div class="wave wave-1"></div>
              <div class="wave wave-2"></div>
              <div class="wave wave-3"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TempApp;
