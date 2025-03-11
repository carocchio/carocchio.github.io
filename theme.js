const themeKey = "theme";
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function getTheme() {
  return localStorage.getItem(themeKey) || (prefersDarkScheme.matches ? "dark" : "light");
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.classList.toggle("dark-mode", theme === "dark");
}

function toggleTheme() {
  const newTheme = getTheme() === "dark" ? "light" : "dark";
  localStorage.setItem(themeKey, newTheme);
  applyTheme(newTheme);
}

// ✅ Apply theme **immediately** when the script loads (before DOMContentLoaded)
applyTheme(getTheme());

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
