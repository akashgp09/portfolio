const preloader = document.querySelector(".preload-screen");
var body = document.getElementsByTagName("BODY")[0];
setTimeout(function () {
  body.style.overflow = "visible";
  preloader.style.display = "none";
}, 4200);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".project1-anime", {
  scrollTrigger: {
    trigger: ".project1-anime",
  },

  duration: 0.7,
  x: 100,
  opacity: 0.2,
});
gsap.from(".project2-anime", {
  scrollTrigger: {
    trigger: ".project2-anime",
  },
  x: -100,
  duration: 0.7,
  opacity: 0.2,
});
gsap.from(".project3-anime", {
  scrollTrigger: {
    trigger: ".project3-anime",
  },
  x: 100,
  opacity: 0.2,
  duration: 0.7,
});
gsap.to(".h1", {
  duration: 2.4,
  opacity: 1,
});
gsap.to(".h2", {
  duration: 2.4,
  delay: 0.4,

  opacity: 1,
});
gsap.to(".h3", {
  duration: 2.4,

  delay: 0.8,
  opacity: 1,
});
gsap.to(".h4", {
  duration: 2.4,
  delay: 1.2,
  opacity: 1,
});
gsap.to(".h5", {
  duration: 2.4,
  delay: 1.6,
  opacity: 1,
});
gsap.to(".h6", {
  duration: 2.4,
  delay: 2,
  opacity: 1,
});
gsap.to(".preloader-img", {
  duration: 3.2,
  delay: 2.4,
  opacity: 1,
});

gsap.from(".nav-anime", {
  y: -10,
  x: -10,
  duration: 1,
  scale: 0.7,
  opacity: 0.1,
  stagger: 0.1,
  force3D: true,
  delay: 4.3,
  z: 0,
});
gsap.from(".header-anime", {
  delay: 5.3,
  y: -20,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});
gsap.from(".header-button", {
  delay: 6.2,
  y: -20,
  duration: 0.7,
  opacity: 0,
});
gsap.from(".about-anime", {
  delay: 6.2,
  y: -5,
  duration: 0.7,
  opacity: 0,
});
gsap.from(".desk-img", {
  scrollTrigger: {
    trigger: ".desk-img",
  },
  x: 400,
  duration: 1,
  opacity: 0,
});
gsap.from(".skills-anime1", {
  scrollTrigger: {
    trigger: ".skills-anime1",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".skills-anime2", {
  scrollTrigger: {
    trigger: ".skills-anime2",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".skills-anime3", {
  scrollTrigger: {
    trigger: ".skills-anime3",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".skills-anime4", {
  scrollTrigger: {
    trigger: ".skills-anime4",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".article1-anime", {
  scrollTrigger: {
    trigger: ".article1-anime",
  },
  x: -150,

  duration: 0.8,
});
gsap.from(".article2-anime", {
  scrollTrigger: {
    trigger: ".article2-anime",
  },
  x: 150,

  duration: 0.8,
});
gsap.from(".article3-anime", {
  scrollTrigger: {
    trigger: ".article3-anime",
  },
  x: -150,

  duration: 0.8,
});

gsap.from(".hidden-skill-anime1", {
  scrollTrigger: {
    trigger: ".hidden-skill-anime1",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".hidden-skill-anime2", {
  scrollTrigger: {
    trigger: ".hidden-skill-anime2",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".hidden-skill-anime3", {
  scrollTrigger: {
    trigger: ".hidden-skill-anime3",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".hidden-skill-anime4", {
  scrollTrigger: {
    trigger: ".hidden-skill-anime4",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".hidden-skill-anime5", {
  scrollTrigger: {
    trigger: ".hidden-skill-anime5",
  },
  y: 40,
  duration: 1,
  scale: 1,
  opacity: 0,
});
gsap.from(".contact-icons", {
  scrollTrigger: {
    trigger: ".contact-icons",
  },
  duration: 1.4,
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
  ease: "elastic",
  force3D: true,
});
