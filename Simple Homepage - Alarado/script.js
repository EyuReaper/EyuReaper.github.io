const themeToggle = document.getElementById("themeToggle");
const body = document.getElementById("body");
const header = document.getElementById("header");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  updateThemeToggleIcon();
});

function updateThemeToggleIcon() {
  const sunIcon = themeToggle.querySelector(".fa-sun");
  const moonIcon = themeToggle.querySelector(".fa-moon");

  if (body.classList.contains("dark-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  } else {
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  }

  if (header.classList.contains("dark-mode")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  } else {
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  }
}
