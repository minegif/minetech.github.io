// Function to check if it's nighttime (7pm)
function isNighttime() {
  var currentTime = new Date().getHours();
  return currentTime >= 19 || currentTime < 6; // Assume night starts at 7pm and ends at 6am
}

// Function to check if the user's device has dark mode enabled
function isDarkModeEnabled() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  
 document.section.classList.add("dark-mode");
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  
  document.section.classList.remove("dark-mode");
}

// Function to toggle dark mode based on conditions
function toggleDarkMode() {
  if (isNighttime() || isDarkModeEnabled()) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// Call toggleDarkMode function when the page loads
window.addEventListener('load', toggleDarkMode);

// Call toggleDarkMode function when the user's device theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleDarkMode);
