// Scroll ke section tertentu
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Simulasi pengiriman form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan Anda telah dikirim! Terima kasih telah menghubungi saya 😊");
  this.reset();
});
