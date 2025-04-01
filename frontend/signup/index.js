document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeButton = document.getElementById("toggle-theme");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.remove("dark-theme", "light-theme");
    body.classList.add(savedTheme);
    themeButton.textContent =
      savedTheme === "dark-theme"
        ? "Switch to Light Theme"
        : "Switch to Dark Theme";
  }

  themeButton.addEventListener("click", function () {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
      themeButton.textContent = "Switch to Dark Theme";
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
      themeButton.textContent = "Switch to Light Theme";
    }
  });
});
