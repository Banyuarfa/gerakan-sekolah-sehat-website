const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && window.scrollY < 1700) {
    header.classList.add("scrolled");
    header.classList.remove("scrolled-more");
  } else if (window.scrollY > 1700) {
    header.classList.add("scrolled-more");
    header.classList.remove("scrolled");
  } else {
    header.classList.remove("scrolled");
    header.classList.remove("scrolled-more");
  }
});
