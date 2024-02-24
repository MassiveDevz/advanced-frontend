gsap.from("text", {
  scrollTrigger: {
    trigger: "svg",
    start: "top center",
    end: "bottom 20%",
    scrub: 2,
  },

  scale: 0.5,
  opacity: 0,
  transformOrigin: "center",
  duration: 2,
  ease: "power4.out",
});
