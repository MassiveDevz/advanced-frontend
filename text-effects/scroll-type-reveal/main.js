const texts = gsap.utils.toArray("section p");

texts.forEach((text) => {
  const img = text.nextElementSibling;
  const splitType = new SplitType(text);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "bottom center",
      toggleActions: "play play none reverse",
    },
  });

  tl.from(splitType.chars, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.005,
    ease: "power2.out",
  });
  tl.from(
    img,
    {
      y: 100,
      opacity: 0,
      duration: 2,
    },
    "<"
  );
});
