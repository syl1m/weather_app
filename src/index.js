import "./style.css";
import getWeatherData from "./weather";
import displayData from "./displayData";

(async () => {
  const weather = await getWeatherData("Seattle");
  displayData(weather);
  console.log(weather);
  console.log(weather.dailyForecastData[0].weekday);
})();

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchBox");

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchInputValue = searchInput.value.trim();
  if (!searchInputValue) {
    return;
  }
  const weather = await getWeatherData(searchInputValue);
  // add error logic when weather contains no data
  displayData(weather);
});
