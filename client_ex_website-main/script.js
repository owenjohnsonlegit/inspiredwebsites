// check for saved 'darkMode' in localStorage
let lightMode = localStorage.getItem("lightMode");

const LightModeToggle = document.querySelector("#light-mode-toggle");

const enableLightMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("lightMode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("lightMode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("lightMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (lightMode === "enabled") {
    enableLightMode();
}

// When someone clicks the button
LightModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  lightMode = localStorage.getItem("lightMode");

  // if it not current enabled, enable it
  if (lightMode !== "enabled") {
    enableLightMode();
    // if it has been enabled, turn it off
  } else {
    disableLightMode();
  }
});
