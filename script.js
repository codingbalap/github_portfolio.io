// ======= Smooth Scroll =======
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ======= Typing Effect =======
const text = ["Front-End Developer", "Web Designer", "Freelancer"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ======= Contact Form =======
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda telah dikirim ✅");
  e.target.reset();
});

