document.querySelector('.navbar-toggler').addEventListener('click', function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('menu-open');
  });
  

function darkModeFunc() {
    var body = document.body;
    var main = document.querySelector('.main').querySelectorAll('div')[0];
    var overlapName = document.getElementById("overlap-name");
    var darkModeToggler = document.getElementById("dark-mode-toggler");

    if (body.classList.contains("dark-mode")) {
        // Currently in dark mode, switch to light mode
        body.classList.remove("dark-mode");
        darkModeToggler.innerHTML = "Dark Mode";
    } else {
        // Currently in light mode, switch to dark mode
        body.classList.add("dark-mode");
        darkModeToggler.innerHTML = "Light Mode";
    }
}
function startBlink(button) {
    // Get the clicked button element
    var clickedButton = button;
    // Check if the button is already in the animated state
    if (!clickedButton.classList.contains("blinking-button")) {
    // Add the "blinking-button" class to the clicked button
      clickedButton.classList.add("blinking-button");
  
    // Disable the clicked button to prevent further clicks during animation
      clickedButton.disabled = true;
  
    // Remove the classes and re-enable the button after the animation duration
      setTimeout(function() {
        clickedButton.classList.remove("blinking-button");
        clickedButton.disabled = false;
      }, 1000); // Duration of the animation in milliseconds
  }
  }
  function callBothFunctions() {
    darkModeFunc();
    startBlink(button);

  }



  