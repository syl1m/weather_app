export default function createUnitsToggle() {
  const toggleDiv = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const metricMode = document.createElement("span");
  const imperialMode = document.createElement("span");
  const slider = document.createElement("span");

  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "unitMode_checkbox");
  label.setAttribute("for", "unitMode_checkbox");

  toggleDiv.classList.add("unitMode_toggle_wrapper");
  input.classList.add("unitMode_checkbox_input");
  label.classList.add("unitMode_checkbox_label");
  metricMode.classList.add("selected_unit");
  metricMode.classList.add("metric_label");
  imperialMode.classList.add("imperial_label");
  slider.classList.add("unitMode_slider");

  metricMode.textContent = "°C";
  imperialMode.textContent = "°F";

  toggleDiv.appendChild(metricMode);
  toggleDiv.appendChild(input);
  toggleDiv.appendChild(label);
  toggleDiv.appendChild(imperialMode);
  label.appendChild(slider);

  input.addEventListener("change", () => {
    const metricElements = document.querySelectorAll(".metric");
    const imperialElements = document.querySelectorAll(".imperial");

    metricElements.forEach((element) => {
      element.classList.toggle("hidden");
    });
    imperialElements.forEach((element) => {
      element.classList.toggle("hidden");
    });
    metricMode.classList.toggle("selected_unit");
    imperialMode.classList.toggle("selected_unit");
  });

  return toggleDiv;
}
