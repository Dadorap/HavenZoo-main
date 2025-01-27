const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
