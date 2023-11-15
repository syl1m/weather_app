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
  const currentTemp = document.createElement("div");
  const conditionIcon = document.createElement("div");

  condition.textContent = `${data.currentData.condition.text}`;
  location.textContent = `${data.locationData.name}, ${data.locationData.region}, ${data.locationData.country}`;
  lastUpdated.textContent = `${data.currentData.last_updated_date_formatted}`;
  currentTemp.textContent = `${data.currentData.temp_c} degrees C`;
  conditionIcon.textContent = `${data.currentData.condition.icon}`;

  leftDiv.appendChild(condition);
  leftDiv.appendChild(location);
  leftDiv.appendChild(lastUpdated);
  leftDiv.appendChild(currentTemp);
  leftDiv.appendChild(conditionIcon);

  //  Right side data
  const feelsLike = document.createElement("div");
  const humidity = document.createElement("div");
  const rainChance = document.createElement("div");
  const windSpeed = document.createElement("div");

  feelsLike.textContent = `${data.currentData.feelslike_c} deg C`;
  humidity.textContent = `${data.currentData.humidity} %`;
  rainChance.textContent = `${data.dailyForecastData.rainChance} %`;
  windSpeed.textContent = `${data.currentData.wind_kph} km/h`;

  rightDiv.appendChild(feelsLike);
  rightDiv.appendChild(humidity);
  rightDiv.appendChild(rainChance);
  rightDiv.appendChild(windSpeed);
}

function createForecastDataUI(data) {
  const forecast = document.querySelector(".forecast");
  forecast.textContent = "";
}

export default function displayData(data) {
  createCurrentDataUI(data);
  createForecastDataUI(data);
}
