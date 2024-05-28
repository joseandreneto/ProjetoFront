// src/components/Weather.tsx
import React, { useState, useEffect } from 'react';

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const API_KEY = '74b3a1827e7a41b77e0110e9866ca0fd';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city.trim() !== '') {
      fetchData();
    }
  }, [city, API_KEY]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div>
        <div className='H1'><h1>Clima : </h1></div>
      <h2>Previsão do Tempo</h2>
      <input type="text" placeholder="Digite o nome da cidade" value={city} onChange={handleInputChange} />
      {weatherData && weatherData.cod === 200 ? (
        <div>
          <h3>{weatherData.name}</h3>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Condição: {weatherData.weather[0].description}</p>
        </div>
      ) : city.trim() !== '' ? (
        <p>Não foi possível encontrar dados para a cidade informada.</p>
      ) : null}
    </div>
  );
};

export default Weather;
