const progress = document.querySelector(".reading-progress span");
const reveals = document.querySelectorAll(".reveal");

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = `${Math.min(1, Math.max(0, value)) * 100}%`;
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -12%", threshold: 0.08 },
);

reveals.forEach((element) => observer.observe(element));
updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
