"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import WeatherCard from "../../components/WeatherCard";
import Header from "../../components/Header";

export default function CityWeather({ params }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `${API_URL}?q=${params.cityname}&appid=${API_KEY}&units=imperial`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError("Error fetching weather data.");
        console.error(error);
      }
    };

    fetchWeather();
  }, [params.cityname]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  const cloudiness = weather.clouds.all / 100;
  const bgColor = `linear-gradient(90deg, gold, rgba(100, 106, 105, ${cloudiness}))`;

  return (
    <div className={styles.pageWrapper} style={{ background: bgColor }}>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <WeatherCard
            city={decodeURIComponent(params.cityname)}
            currTemp={weather.main.temp}
            lowTemp={weather.main.temp_min}
            highTemp={weather.main.temp_max}
            cloudiness={weather.clouds.all}
            windSpeed={weather.wind.speed}
            humidity={weather.main.humidity}
            weatherType={weather.weather[0].main}
          />
        </main>
      </div>
    </div>
  );
}
