const buy = document.querySelector(".buy");
const back = document.querySelector(".bx-arrow-back");

// const for Animate targets
const PRODUCT_IMG = ".product-1";
const MENU_BTN = ".menu";
const PROFILE = ".profile";
const BUT_BUTTON = ".buy";

// const for animation props
const ELASTIC_OUT = "elastic.out(1, .8)";

// make GSAP timeline
let t1 = gsap.timeline({ paused: true, reversed: true });
let t2 = gsap.timeline({ paused: true, reversed: true });

t1.play();

// buy button ->
buy.addEventListener("click", (e) => t2.play());
back.addEventListener("click", (e) => {
  t2.reverse();
});

// animate car
t1.to(PRODUCT_IMG, {
  ease: ELASTIC_OUT,
  y: 0,
  duration: 1.5,
});

// animate Menu button
t1.to(
  MENU_BTN,
  {
    ease: ELASTIC_OUT,
    x: 0,
    duration: 1.5,
  },
  0.3
);

// animate profile
t1.to(
  PROFILE,
  {
    ease: ELASTIC_OUT,
    x: 0,
    duration: 1.5,
  },
  0.3
);

// animate scale of buy button
t1.from(
  BUT_BUTTON,
  {
    ease: ELASTIC_OUT,
    scale: 0,
    duration: 1.5,
  },
  0.6
);

// timeline2 animation -> clicked the buy button car goes up
t2.to(PRODUCT_IMG, {
  ease: ELASTIC_OUT,
  y: -1000,
  duration: 2,
});

t2.to(
  MENU_BTN,
  {
    ease: "power1.inOut",
    x: 50,
    duration: 1.5,
  },
  0
);

t2.to(PROFILE, { ease: "power1.inOut", x: 50, duration: 1.5 }, 0);
t2.to(
  BUT_BUTTON,
  {
    ease: "power1.inOut",
    scale: 0,
    duration: 0.3,
  },
  0
);
