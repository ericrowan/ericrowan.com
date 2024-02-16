function displayAnimatedEllipsis() {
    const dots = document.getElementById("loading");
    let currentDot = 0;
  
    setInterval(() => {
      dots.textContent = ".".repeat(currentDot);
      currentDot = (currentDot + 1) % 4;
    }, 500);
  }
  
  function displayCurrentDateAndTime() {
    const date = new Date();
    const timestampContainer = document.getElementById("timestamp-container");
    const timestampSpan = timestampContainer.querySelector("span");
  
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
  
    if (timestampSpan) {
      timestampSpan.textContent = combined;
    } else {
      const newSpan = document.createElement("span");
      newSpan.textContent = combined;
      timestampContainer.appendChild(newSpan);
    }
  }
  
  // Call functions once
  displayAnimatedEllipsis();
  displayCurrentDateAndTime();
  