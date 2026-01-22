function toggleMenu() {
  document.querySelector(".menu-links").classList.toggle("open");
  document.querySelector(".hamburger-icon").classList.toggle("open");
}

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  toggleBtn.textContent = body.classList.contains("dark-theme") ? "🌙" : "🌞";
});

// Back to top
document.querySelector(".back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Tiny Easter Egg 😄
const egg = document.querySelector(".easter-egg");
let clicked = false;

egg.addEventListener("click", () => {
  if (!clicked) {
    egg.textContent = "Still curious? So am I 👀";
    clicked = true;
  } else {
    egg.textContent = "Built with ❤️ & curiosity";
    clicked = false;
  }
});