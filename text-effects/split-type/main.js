const text = new SplitType("h1");
const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });
gsap.set("h1", { autoAlpha: 1 });

tl.from(text.chars, {
  y: 40,
  opacity: 0,
  skewX: 30,
  stagger: 0.03,
  duration: 1,
}).to(text.chars, {
  y: -40,
  opacity: 0,
  skewX: -10,
  stagger: 0.03,
  duration: 1,
});
