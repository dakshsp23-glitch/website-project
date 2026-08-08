document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu");
  const nav = document.querySelector("header nav");
  mobileMenuBtn.addEventListener("click", () => nav.classList.toggle("active"));
  document.querySelectorAll("header nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("active")));
  document.getElementById("year").textContent = new Date().getFullYear();
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".fade-in").forEach(element => observer.observe(element));
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you, " + document.getElementById("name").value + "! Your message has been received.");
    e.target.reset();
  });
});