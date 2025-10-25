// ============ PAGE TRANSITION ============ //
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    if (
      link.hostname === window.location.hostname &&
      link.getAttribute("target") !== "_blank"
    ) {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href.startsWith("#")) {
          e.preventDefault();
          document.body.classList.remove("fade-in");
          document.body.classList.add("fade-out");
          setTimeout(() => {
            window.location = href;
          }, 500);
        }
      });
    }
  });
});

// ============ THEME TOGGLE ============ //
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  }
}

// ============ TYPING EFFECT ============ //
const typingElement = document.getElementById("typing");
if (typingElement) {
  const words = ["Front-End Developer", "Web Designer", "Freelancer"];
  let wordIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeEffect() {
    if (typing) {
      typingElement.textContent = words[wordIndex].substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === words[wordIndex].length) {
        typing = false;
        setTimeout(typeEffect, 1500);
      } else {
        setTimeout(typeEffect, 120);
      }
    } else {
      typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(typeEffect, 60);
    }
  }
  typeEffect();
}

// ============ SMOOTH SCROLL ============ //
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ============ CONTACT FORM ============ //
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button");
    btn.textContent = "Mengirim...";
    setTimeout(() => {
      alert("Terima kasih! Pesan Anda telah terkirim ✅");
      contactForm.reset();
      btn.textContent = "Kirim Pesan";
    }, 1200);
  });
}
