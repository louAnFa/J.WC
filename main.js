document.getElementById("doneBtn").addEventListener("click", () => {
  // Simulate the "TEXT" message response
  const response = confirm("Are you convinced? Click 'OK' for CONVINCED or 'Cancel' for NON-CONVINCED.");

  const message = response ? "TEXT 843-200-9452 CONVINCED" : "TEXT 843-200-9452 NON-CONVINCED";
  document.querySelector(".confirmation").classList.remove("hidden");
  document.getElementById("responseMessage").textContent = message;
});

// Open the "Learn More" popup
document.querySelectorAll(".learnMoreBtn").forEach(button => {
  button.addEventListener("click", () => {
    const section = button.getAttribute("data-section");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");

    // Set the text for the pop-up based on the section
    if (section === "why") {
      popupText.textContent = "Window cleaning offers flexibility and convenience that a regular job doesn’t. By offering a door-to-door service, I can bring value directly to people’s homes. Unlike professionals, I’ll be able to offer faster services and more affordable rates. I’ll work around my schedule and tailor the service to meet specific customer needs, which allows for more personalized, flexible, and affordable window cleaning. It's more efficient and accessible for people who don’t want to wait for appointments weeks ahead!";
    } else if (section === "how") {
      popupText.textContent = "I plan to approach window cleaning by using the right tools and techniques — starting with an extendable window washer. I’ll make sure to clean windows efficiently, without the need for ladders, and ensure a safe working environment. I’ll also be thorough with cleaning methods, always aiming for the highest standards even if I’m just getting started. By being able to offer flexibility and lower prices, I can create value for my clients and outperform the competition!";
    } else if (section === "responsibility") {
      popupText.textContent = "Taking responsibility in this area means I’ll handle the cleaning jobs with care and attention. I’ll always check in with you before starting any work and keep everything safe and organized. With this responsibility, I’ll also improve my time management and communication skills. Window cleaning is a manageable responsibility that I can handle with patience and respect for others' property!";
    }

    // Show the popup
    popup.style.display = "block";
  });
});

// Close the popup when clicking on the close button
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

// Close the popup when clicking anywhere outside the content
window.addEventListener("click", (event) => {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
