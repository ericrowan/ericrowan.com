window.addEventListener("DOMContentLoaded", () => {
    // Display current date and time
    function displayCurrentDateAndTime() {
      const date = new Date();
      const timestampContainer = document.getElementById("timestamp-container");
  
      const options = {
        year: "numeric",
        month: "short",
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
  
    displayCurrentDateAndTime();
  });
  