const header = document.querySelector("header");
const venus = document.querySelector(".venus");
const saturn = document.querySelector(".saturn");
const constellation = document.querySelector(".constellation");
const fallingStar = document.querySelector(".falling-star");
const birds = document.querySelector(".birds");
const students = document.querySelector(".students");

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;

  // Parallax Events
  venus.style.marginTop = `-${scrollValue * 0.2}px`;
  fallingStar.style.marginRight = `${scrollValue * 0.7}px`;
  fallingStar.style.marginTop = `${scrollValue * 0.7}px`;
  saturn.style.marginTop = `-${scrollValue * 0.3}px`;
  constellation.style.marginBottom = `${scrollValue * 0.1}px`;
  students.style.marginRight = `${scrollValue * 0.1}px`;
  birds.style.marginTop = `${scrollValue * 0.1}px`;
  birds.style.marginRight = `${scrollValue * 0.2}px`;

  // NavBar Styling
  if (scrollValue > 0 && scrollValue < 1700) {
    header.classList.add("scrolled");
    header.classList.remove("scrolled-more");
  } else if (scrollValue > 1700) {
    header.classList.add("scrolled-more");
    header.classList.remove("scrolled");
  } else {
    header.classList.remove("scrolled");
    header.classList.remove("scrolled-more");
  }
});
