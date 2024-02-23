const gallery = gsap.utils.toArray("img");

gsap.set("img", {
  clipPath: "polygon(0% 100%, 100% 100%,100% 100%, 0 100% )",
});
gsap.set(".border", {
  scaleX: 0,
});
gsap.set(["span", "p"], {
  yPercent: 100,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "section.gallery",
    start: "top 20%",
    end: "bottom top",
    toggleActions: "play none play reverse",
  },
  defaults: {
    ease: "power4.inOut",
  },
});

tl.from("li", {
  y: -100,
  stagger: 0.1,
})
  .to(
    "img",
    {
      clipPath: "polygon(0% 95%, 100% 49%, 100% 100%, 0 100%)",
    },
    "<"
  )
  .to(
    "img",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    "-=.5"
  )
  .to(
    ".border",
    {
      scaleX: 1,
      duration: 1,
    },
    "-=.5"
  )
  .to(
    ["span", "p"],
    {
      yPercent: 0,
      stagger: 0.1,
    },
    "-=.5"
  );

gallery.forEach((img) => {
  let p = img.closest("a").querySelector("p");
  let originalText = p.innerText;

  img.addEventListener("mouseenter", () => {
    gsap.to(img, {
      clipPath: "polygon(0% 13%, 100% 0%, 100% 87%, 0% 100%)",
    });

    randomType(p, "01", 500, true);
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
    p.innerText = originalText;
  });
});

function randomType(element, characters, duration, sequential = false) {
  let originalText = element.innerText;
  let textArray = originalText.split("");
  let charactersArray = characters.split("");
  let startTime = new Date().getTime();
  let interval;

  if (sequential) {
    let currentIndex = 0;
    interval = setInterval(function () {
      textArray[currentIndex] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
      element.innerText = textArray.join("");
      currentIndex++;
      if (currentIndex === textArray.length) {
        currentIndex = 0;
      }
      if (new Date().getTime() - startTime >= duration) {
        clearInterval(interval);
        element.innerText = originalText;
      }
    }, 20);
  } else {
    interval = setInterval(function () {
      for (let i = 0; i < textArray.length; i++) {
        textArray[i] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
      }
      element.innerText = textArray.join("");
      if (new Date().getTime() - startTime >= duration) {
        clearInterval(interval);
        element.innerText = originalText;
      }
    }, 0);
  }
}

/*

    Usage:

    Paste this function into your project and call it like this:

    randomType(domElement, '01', 500, true);

    The first parameter is just a domElement that has type inside of it. 
    The second parameter is a string of characters that you want to be used in the random typing.
    The third parameter is the duration of the typing in milliseconds.
    The fourth parameter is a boolean that determines whether the typing is sequential or not.

    If you still don't understand how to use this, don't sweat it. I will show you
    in the next solution video module.

*/

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
