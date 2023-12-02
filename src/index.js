import "./style.css";
import getWeatherData from "./weather";
import displayData from "./displayData";
import createUnitsToggle from "./unitsToggle";
import "./unitsToggle.css";
import getCurrentLocation from "./getCurrentLocation";

// Create and display a units toggle in DOM
(function createUnitsToggleInDOM() {
  const toggleWrapper = createUnitsToggle();
  const locationSearchDiv = document.querySelector(".location-search");

  locationSearchDiv.appendChild(toggleWrapper);
})();

// Display weather data for user's current location on initial page load
(async () => {
  try {
    const currentLocation = await getCurrentLocation();
    const weather = await getWeatherData(currentLocation);
    displayData(weather);
  } catch (err) {
    const locationDiv = document.querySelector(".location");
    locationDiv.textContent = `${err}`;
  }
})();

// Update weather data with new location from search query
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchBox");
const searchQueryFormDiv = document.querySelector(".searchQueryForm");
const searchQueryForm = document.querySelector("form");
const errorMsg = document.querySelector(".errorMsg");

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  searchBtn.classList.toggle("close");
  searchInput.classList.toggle("inclicked");
  searchQueryFormDiv.classList.toggle("open_form_div");

  const searchInputValue = searchInput.value.trim();
  if (!searchInputValue) {
    searchQueryForm.reset();
    return;
  }

  // Display data for a valid location, otherwise display an error message
  const weather = await getWeatherData(searchInputValue);
  if (weather) {
    displayData(weather);
    errorMsg.textContent = "Search location";
  } else {
    errorMsg.textContent = `${searchInputValue} is not a valid location.`;
  }
  searchQueryForm.reset();
});
