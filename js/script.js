document.getElementById("year").textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => observer.observe(element));

/* Random delay = tombol tidak bergerak bersamaan setiap kali halaman dibuka */
document.querySelectorAll(".btn").forEach((button) => {
  const randomDelay = (Math.random() * 2.5).toFixed(2);
  button.style.animationDelay = `-${randomDelay}s`;
});

document.querySelectorAll(".card").forEach((card) => {
  const delay = (Math.random() * 0.5).toFixed(2);
  card.style.transitionDelay = `${delay}s`;
});
