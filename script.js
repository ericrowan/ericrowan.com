// Ensure DOM is ready before running any code
window.addEventListener("DOMContentLoaded", () => {

    // Function to animate ellipsis dots
    function displayAnimatedEllipsis() {
      const dots = document.getElementById("loading");
      if (!dots) {
        console.error("Element with ID 'loading' not found. Cannot display animated ellipsis.");
        return; // Exit function if element not found
      }
  
      let currentDot = 0;
  
      setInterval(() => {
        dots.textContent = ".".repeat(currentDot);
        currentDot = (currentDot + 1) % 4;
      }, 500);
    }
  
    // Function to display current date and time
    function displayCurrentDateAndTime() {
      const date = new Date();
  
      const timestampContainer = document.getElementById("timestamp-container");
      if (!timestampContainer) {
        console.error("Element with ID 'timestamp-container' not found. Cannot display timestamp.");
        return; // Exit function if element not found
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
  
      const formattedDate = date.toLocaleDateString("en-US", options);
      const formattedTime = date.toLocaleTimeString("en-US", options);
      const combined = `${formattedDate} ${formattedTime}`;
  
      const timestampSpan = timestampContainer.querySelector("span");
      if (timestampSpan) {
        timestampSpan.textContent = combined;
      } else {
        const newSpan = document.createElement("span");
        newSpan.textContent = combined;
        timestampContainer.appendChild(newSpan);
      }
    }
  
    // Call functions after the DOM is ready
    displayAnimatedEllipsis();
    displayCurrentDateAndTime();
  });
  