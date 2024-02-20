gsap.set("img", {
  yPercent: -100,
});
gsap.set("p", {
  opacity: "0",
});
gsap.to("img", {
  yPercent: 0,
  scale: 1.3,
  delay: 0.5,
  stagger: 0.1,
  ease: "power4.out",
  duration: 1.5,
  onComplete: scaleDownAndFadeIn,
});

function scaleDownAndFadeIn() {
  gsap.to("img", {
    scale: 1,
    duration: 1,
  });
  // gsap.to("p", {
  //   opacity: 1,
  //   y: 50,
  //   stagger: 0.3,
  // });
  gsap.fromTo(
    "p",
    {
      y: -50,
      x: -50,
    },
    {
      opacity: 1,
      y: 50,
      x: 0,
      stagger: 0.3,
      duration: 2,
    }
  );
}
