/* eslint-disable no-plusplus */
function createCurrentDataUI(data) {
  //  Left side data
  const location = document.querySelector(".location");
  const lastUpdated = document.querySelector(".lastUpdated");
  const currentTempC = document.querySelector(".currentTempC");
  const currentTempF = document.querySelector(".currentTempF");
  const conditionIcon = document.querySelector(".conditionIcon");
  const condition = document.querySelector(".condition");

  location.textContent = `${data.locationData.name}`;
  lastUpdated.textContent = `Last Updated: ${data.currentData.last_updated_date_formatted}`;
  currentTempC.textContent = `${data.currentData.temp_c} °C`;
  currentTempF.textContent = `${data.currentData.temp_f} °F`;
  conditionIcon.src = `https:${data.currentData.condition.icon}`;
  condition.textContent = `${data.currentData.condition.text}`;

  //  Right side data
  const feelsLikeC = document.querySelector(".feelsLikeC");
  const feelsLikeF = document.querySelector(".feelsLikeF");
  const humidity = document.querySelector(".humidity");
  const rainChance = document.querySelector(".rainChance");
  const windSpeedKph = document.querySelector(".windSpeedKph");
  const windSpeedMph = document.querySelector(".windSpeedMph");

  feelsLikeC.textContent = `${data.currentData.feelslike_c} °C`;
  feelsLikeF.textContent = `${data.currentData.feelslike_f} °F`;
  humidity.textContent = `${data.currentData.humidity} %`;
  rainChance.textContent = `${data.dailyForecastData[0].rainChance} %`;
  windSpeedKph.textContent = `${data.currentData.wind_kph} kph`;
  windSpeedMph.textContent = `${data.currentData.wind_mph} mph`;
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

function addFadeInAnimation() {
  const animatedDivs = document.querySelectorAll(".fade-in");
  animatedDivs.forEach((div) => {
    div.classList.remove("fade-in");
    // eslint-disable-next-line no-void
    void div.offsetWidth; // Triggers a DOM reflow to restart the fade in CSS animation
    div.classList.add("fade-in");
  });
}

export default function displayData(data) {
  createCurrentDataUI(data);
  createForecastDataUI(data);
  addFadeInAnimation();
}
