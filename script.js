// Enhanced Scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  
    document.querySelectorAll(".fade-in-left, .fade-in-right, .fade-in-up").forEach(section => {
      observer.observe(section);
    });
  });
  