import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import { useState, useEffect } from 'react';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';


const App = () => {
  const [weather, setWeather] = useState({});
  // Define async function to fetch weather data
  const fetchData = async (city) => {
    // Call weather service with New York as parameter
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };
  // The following log should be outside of the fetchData function
  console.log('State:', weather);

  useEffect(() => {
    // Define a fetch function:
    const fetchDefaultData = async () => {
      const data = await weatherService.show("New York");
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };
    
    // Call the fetch function when the page loads:
    fetchDefaultData();

  }, []); // An empty dependency array means this runs once after the initial render

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;






// This syntax imports everything (*) exported from the weatherService.js module and groups them inside a weatherService object. Whenever we require a specific service function, we can access it through dot notation on the weatherService object.