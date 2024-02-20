const menuToggle = document.querySelector(".menu-toggle");

let menuStatus = false;

const menuTL = gsap.timeline({ defaults: { durations: 0.3, ease: "power4.inOut" } });

menuTL.to(["main", "aside"], {
  x: 0,
  stagger: 0.2,
});

menuTL.paused(true);

menuToggle.addEventListener("click", () => {
  if (!menuStatus) {
    menuTL.play();
    menuStatus = true;
  } else {
    menuTL.reverse();
    menuStatus = false;
  }
});
