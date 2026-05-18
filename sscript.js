// NAVBAR

window.addEventListener("scroll", () => {

  const nav = document.getElementById("floating-nav");

  if (window.scrollY > 50) {
    nav.style.opacity = "1";
  } else {
    nav.style.opacity = "0.95";
  }

});

// REVEAL ANIMATION

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }

  });

});

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});