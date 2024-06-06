// DEPENDENCIES
const modeToggle = document.querySelector('#mode-toggle');

// FUNCTIONS

// Adds dark mode tag to body.
function darkModeToggle() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// EVENT LISTENERS

// Checks for clicks on dark mode toggle icon and triggers the dark mode function.
  modeToggle.addEventListener('click', function (event) {
    event.preventDefault();
    darkModeToggle();
  });