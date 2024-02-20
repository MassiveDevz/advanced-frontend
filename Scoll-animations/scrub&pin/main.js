const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".primary",
    start: "top 20%",
    end: "bottom center",
    toggleActions: "play reverse restart reverse",
    pin: true,
  },
  defaults: {
    ease: "power3.out",
    duration: 1,
  },
});

const scrubTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".primary",
    start: "top 30%",
    end: "40% top",
    scrub: true,
  },
});

tl.from("h1", {
  yPercent: 100,
})
  .from(
    "aside p",
    {
      yPercent: 140,
    },
    "-=.8"
  )
  .from(
    "main p",
    {
      yPercent: 210,
      opacity: 0,
    },
    "-=1"
  );
scrubTl
  .from(".line", {
    scaleY: 0,
  })
  .from(
    "span",
    {
      x: 0,
      yPercent: 0,
    },
    "<"
  );

const lenis = new lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
