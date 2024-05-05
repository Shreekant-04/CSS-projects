let section = document.querySelector("section");
window.addEventListener("scroll", () => {
  let val = window.scrollY;
  section.style.clipPath = `circle(${val * 2.3}px at left center)`;
});
