/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { format, parse } from "date-fns";

function getCurrentData(data) {
  const {
    current: {
      last_updated,
      condition,
      temp_f,
      temp_c,
      feelslike_f,
      feelslike_c,
      humidity,
      wind_kph,
      wind_mph,
    },
  } = data;
  const last_updated_date = parse(last_updated, "yyyy-MM-dd HH:mm", new Date());
  const last_updated_date_formatted = format(
    last_updated_date,
    "EEE MMM d, yyyy h:mm aa"
  );
  return {
    last_updated_date_formatted,
    condition,
    temp_f,
    temp_c,
    feelslike_f,
    feelslike_c,
    humidity,
    wind_kph,
    wind_mph,
  };
}

function getLocationData(data) {
  const {
    location: { name, region, country, localtime },
  } = data;
  return {
    name,
    region,
    country,
    localtime,
  };
}

function getDailyForecast(data) {
  const forecastData = [];
  const {
    forecast: { forecastday },
  } = data;

  for (let i = 0; i < forecastday.length; i++) {
    const {
      [i]: { date },
    } = forecastday;
    const {
      [i]: {
        day: {
          avgtemp_c,
          avgtemp_f,
          condition,
          daily_chance_of_rain: rainChance,
          daily_chance_of_snow: snowChance,
          maxtemp_c,
          maxtemp_f,
          mintemp_c,
          mintemp_f,
        },
      },
    } = forecastday;

    // Reformat date to weekday name
    const weekday = format(parse(date, "yyyy-MM-dd", new Date()), "EEEE");

    const forecastDayData = {
      weekday,
      avgtemp_c,
      avgtemp_f,
      condition,
      rainChance,
      snowChance,
      maxtemp_c,
      maxtemp_f,
      mintemp_c,
      mintemp_f,
    };

    forecastData.push(forecastDayData);
  }
  return forecastData;
}

function processData(data) {
  const currentData = getCurrentData(data);
  const locationData = getLocationData(data);
  const dailyForecastData = getDailyForecast(data);
  return { currentData, locationData, dailyForecastData };
}

export default async function getWeatherData(location) {
  const fetchURL = `https://api.weatherapi.com/v1/forecast.json?key=fa6c6264dc9743299ef201135230410&q=${location}&days=3&aqi=yes&alerts=yes`;

  try {
    const response = await fetch(fetchURL, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`${location} not found`);
    }
    const weatherData = await response.json();
    const processedData = processData(weatherData);
    return processedData;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error:", err);
    return null;
  }
}
