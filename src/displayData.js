function createCurrentDataUI() {
  const currentWeatherDiv = document.querySelector(".current-weather");
  const dataDiv = document.createElement("div");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");

  dataDiv.classList.add("currentDataDiv");
  leftDiv.classList.add("left");
  rightDiv.classList.add("right");

  dataDiv.appendChild(leftDiv);
  dataDiv.appendChild(rightDiv);
  currentWeatherDiv.prepend(dataDiv);
}

export default function displayData(data) {
  createCurrentDataUI();
  console.log(data);
}
