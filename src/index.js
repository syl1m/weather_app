import "./style.css";
import getWeatherData from "./weather";
import displayData from "./displayData";
import createUnitsToggle from "./unitsToggle";
import "./unitsToggle.css";

// Add units toggle
(function createUnitsToggleInDOM() {
  const toggleWrapper = createUnitsToggle();
  const locationSearchDiv = document.querySelector(".location-search");

  locationSearchDiv.appendChild(toggleWrapper);
})();

// Set initial location to Seattle for weather data
(async () => {
  const weather = await getWeatherData("Seattle");
  displayData(weather);
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
