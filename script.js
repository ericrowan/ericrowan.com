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
      const date = new Date();
      const timestampContainer = document.getElementById("timestamp-container");
      if (!timestampContainer) {
        console.error("Element with ID 'timestamp-container' not found. Cannot display timestamp.");
        return;
      }
  
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        hour12: true,
      };
  
      const combined = date.toLocaleString("en-US", options);
      timestampContainer.textContent = combined; // Directly set the text content
    }
  
    displayAnimatedEllipsis();
    displayCurrentDateAndTime();
  });
  