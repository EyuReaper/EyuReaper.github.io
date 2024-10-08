// Select the profile card element and the toggle buttons
const profileCard = document.querySelector(".profile-card"); // Use .profile-card
const toggleButtons = document.querySelectorAll(".toggle-info");

// Set the initial state of the more info section
const moreInfo = document.querySelector(".more-info");
moreInfo.style.display = "none"; // Ensure it's hidden initially

// Add event listeners to each toggle button
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Flip the card by toggling the class on .card-inner
    const cardInner = profileCard.querySelector(".card-inner"); // Get .card-inner from profileCard
    cardInner.classList.toggle("flipped");

    const moreInfo = cardInner.querySelector(".more-info"); // get .more-info from card-inner

    if (cardInner.classList.contains("flipped")) {
      moreInfo.style.display = "block"; // Show more info when flipped
      button.textContent = "Show more";
    } else {
      moreInfo.style.display = "none"; // Hide more info when not flipped
      button.textContent = "Show less";
    }
  });
});
