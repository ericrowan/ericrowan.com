function displayCurrentDateAndTime() {
    const timestampContainer = document.getElementById("timestamp-container");
    if (!timestampContainer) {
      return;
    }
  
    const date = new Date();
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
  
  // Call the function once after the DOM is ready
  window.addEventListener("DOMContentLoaded", displayCurrentDateAndTime);
  