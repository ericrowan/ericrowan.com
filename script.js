window.addEventListener("DOMContentLoaded", () => {
    // Function to animate ellipsis dots
    function displayAnimatedEllipsis() {
      const dots = document.getElementById("loading");

      let currentDot = 0;
      dots.textContent = "."; // Start with one dot
  
      const intervalId = setInterval(() => {
        dots.textContent += "."; // Add dots until reaching three
        if (currentDot === 3) {
          dots.textContent = ""; // Reset to start the animation again
        }
        currentDot = (currentDot + 1) % 4;
      }, 500);
    }
  
    // Function to display current date and time (once)
    function displayCurrentDateAndTime() {
        const timestampContainer = document.getElementById("timestamp-container");
        setInterval(() => {
          timestampContainer.textContent = new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            hour12: true,
          });
        }, 1000); // Update every second
  
    displayAnimatedEllipsis();
    displayCurrentDateAndTime();
  });
  