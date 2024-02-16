function displayAnimatedEllipsis() {
    const dots = document.getElementById("loading");
    if (!dots) {
      return; // Early exit if element doesn't exist
    }
  
    let currentDot = 0;
    setInterval(() => {
      dots.textContent = ".".repeat(currentDot);
      currentDot = (currentDot + 1) % 4;
    }, 500);
  }
  
  function displayCurrentDateAndTime() {
    const timestampContainer = document.getElementById("timestamp-container");
    if (!timestampContainer) {
      return; // Early exit if element doesn't exist
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
  
  // Call functions after the DOM is ready
  window.addEventListener("DOMContentLoaded", () => {
    displayAnimatedEllipsis();
    displayCurrentDateAndTime();
    setInterval(displayCurrentDateAndTime, 1000); // Update time every second
  });
  