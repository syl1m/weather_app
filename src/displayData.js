/* eslint-disable no-plusplus */
function createCurrentDataUI(data) {
  // Create basic layout divs
  const currentWeatherDiv = document.querySelector(".current-weather");
  currentWeatherDiv.textContent = "";

  const dataDiv = document.createElement("div");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");

  dataDiv.classList.add("currentDataDiv");
  leftDiv.classList.add("left");
  rightDiv.classList.add("right");

  dataDiv.appendChild(leftDiv);
  dataDiv.appendChild(rightDiv);
  currentWeatherDiv.appendChild(dataDiv);

  //  Left side data
  const condition = document.createElement("div");
  const location = document.createElement("div");
  const lastUpdated = document.createElement("div");
  const currentTempC = document.createElement("div");
  const currentTempF = document.createElement("div");
  const conditionIcon = document.createElement("img");

  condition.textContent = `${data.currentData.condition.text}`;
  location.textContent = `${data.locationData.name}, ${data.locationData.region}, ${data.locationData.country}`;
  lastUpdated.textContent = `${data.currentData.last_updated_date_formatted}`;
  currentTempC.textContent = `${data.currentData.temp_c} °C`;
  currentTempF.textContent = `${data.currentData.temp_f} °F`;
  conditionIcon.src = `https:${data.currentData.condition.icon}`;

  currentTempC.classList.add("metric");
  currentTempF.classList.add("imperial");

  leftDiv.appendChild(condition);
  leftDiv.appendChild(location);
  leftDiv.appendChild(lastUpdated);
  leftDiv.appendChild(currentTempC);
  leftDiv.appendChild(currentTempF);
  leftDiv.appendChild(conditionIcon);

  //  Right side data
  const feelsLikeC = document.createElement("div");
  const feelsLikeF = document.createElement("div");
  const humidity = document.createElement("div");
  const rainChance = document.createElement("div");
  const windSpeedKph = document.createElement("div");
  const windSpeedMph = document.createElement("div");

  feelsLikeC.textContent = `${data.currentData.feelslike_c} °C`;
  feelsLikeF.textContent = `${data.currentData.feelslike_f} °F`;
  humidity.textContent = `${data.currentData.humidity} %`;
  rainChance.textContent = `${data.dailyForecastData[0].rainChance} %`;
  windSpeedKph.textContent = `${data.currentData.wind_kph} kph`;
  windSpeedMph.textContent = `${data.currentData.wind_mph} mph`;

  feelsLikeC.classList.add("metric");
  feelsLikeF.classList.add("imperial");
  windSpeedKph.classList.add("metric");
  windSpeedMph.classList.add("imperial");

  rightDiv.appendChild(feelsLikeC);
  rightDiv.appendChild(feelsLikeF);
  rightDiv.appendChild(humidity);
  rightDiv.appendChild(rainChance);
  rightDiv.appendChild(windSpeedKph);
  rightDiv.appendChild(windSpeedMph);
}

function createForecastDataUI(data) {
  const forecast = document.querySelector(".forecastDiv");
  forecast.textContent = "";

  for (let i = 0; i < data.dailyForecastData.length; i++) {
    const dayDiv = document.createElement("div");
    const weekDay = document.createElement("div");
    const conditionIcon = document.createElement("img");
    const condition = document.createElement("div");
    const tempsDiv = document.createElement("div");
    const minTempC = document.createElement("div");
    const minTempF = document.createElement("div");
    const maxTempC = document.createElement("div");
    const maxTempF = document.createElement("div");

    weekDay.textContent = `${data.dailyForecastData[i].weekday}`;
    conditionIcon.src = `https:${data.dailyForecastData[i].condition.icon}`;
    condition.textContent = `${data.dailyForecastData[i].condition.text}`;
    minTempC.textContent = `${data.dailyForecastData[i].mintemp_c} °C`;
    minTempF.textContent = `${data.dailyForecastData[i].mintemp_f} °F`;
    maxTempC.textContent = `${data.dailyForecastData[i].maxtemp_c} °C`;
    maxTempF.textContent = `${data.dailyForecastData[i].maxtemp_f} °F`;

    dayDiv.classList.add("forecast_day_div");
    weekDay.classList.add("weekday");
    conditionIcon.classList.add("forecast_condition_icon");
    condition.classList.add("forecast_condition");
    tempsDiv.classList.add("temps_div");
    minTempC.classList.add("forecast_minTemp");
    maxTempC.classList.add("forecast_maxTemp");
    minTempF.classList.add("forecast_minTemp");
    maxTempF.classList.add("forecast_maxTemp");
    minTempC.classList.add("metric");
    maxTempC.classList.add("metric");
    minTempF.classList.add("imperial");
    maxTempF.classList.add("imperial");
    minTempF.classList.add("hidden");
    maxTempF.classList.add("hidden");

    dayDiv.appendChild(weekDay);
    dayDiv.appendChild(tempsDiv);
    tempsDiv.appendChild(maxTempC);
    tempsDiv.appendChild(maxTempF);
    tempsDiv.appendChild(minTempC);
    tempsDiv.appendChild(minTempF);
    dayDiv.appendChild(conditionIcon);
    dayDiv.appendChild(condition);
    forecast.appendChild(dayDiv);
  }
}

export default function displayData(data) {
  createCurrentDataUI(data);
  createForecastDataUI(data);
}
