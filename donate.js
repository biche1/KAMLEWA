const slider = document.querySelector('.slider');

slider.addEventListener('click', () => {
  let currentState = slider.dataset.state || "off"; // Get current state (default is off)
  currentState = currentState === "off" ? "on" : "off"; // Toggle state
  slider.dataset.state = currentState; // Update data attribute

  if (currentState === "on") {
    console.log('Button is on');
  } else {
    console.log('Button is off');
  }
});
