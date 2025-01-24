const scrollToTopBtn = document.getElementById("scrollToTopBtn");


function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId);

  section.scrollIntoView({ behavior: "smooth" });
}


window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

