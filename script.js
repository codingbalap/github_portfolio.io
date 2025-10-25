// ===== Smooth Scroll =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ===== Typing Effect =====
const text = ["Front-End Developer", "Web Designer", "Freelancer"];
let i = 0, j = 0;
const typing = document.getElementById("typing");

function typingEffect() {
  if (j < text[i].length) {
    typing.textContent += text[i].charAt(j);
    j++;
    setTimeout(typingEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (j > 0) {
    typing.textContent = text[i].substring(0, j - 1);
    j--;
    setTimeout(eraseEffect, 60);
  } else {
    i = (i + 1) % text.length;
    setTimeout(typingEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typingEffect);

// ===== Contact Form =====
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Pesan Anda telah terkirim! ✅");
  e.target.reset();
});

// ===== Theme Toggle with Smooth Transition =====
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  document.body.style.transition = "background-color 0.8s ease, color 0.8s ease";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  }
});


