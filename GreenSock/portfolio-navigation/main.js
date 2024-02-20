const links = gsap.utils.toArray("li a");
/* We use the above insted of below because below produces a 'nodelist' instead of a standard array, which has more methods to work with unlike a nodelist */
// const links = document.querySelectorAll("li a");

links.forEach((link) => {
  let linkTl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.6 } });

  const headingStart = link.querySelector(".primary"),
    headingEnd = link.querySelector(".secondary"),
    date = link.querySelector(".date"),
    lineDash = link.querySelector(".line");

  linkTl
    .to(headingStart, { yPercent: -100 })
    .to(headingEnd, { yPercent: -100 }, "<")
    .to(lineDash, { scaleX: 1 }, "<")
    .to(date, { y: 0 }, "<");

  linkTl.pause();

  link.addEventListener("mouseenter", () => {
    linkTl.play();
  });
  link.addEventListener("mouseleave", () => {
    linkTl.reverse();
  });
});
