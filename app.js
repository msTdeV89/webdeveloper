const handleMenu = function () {
  const barsBtn = document.querySelector(".header__bars");
  const bars = barsBtn.querySelector(".fas");
  const nav = document.querySelector(".header__nav--mobile");
  const navItems = [...document.querySelectorAll(".header__link")];

  barsBtn.addEventListener("click", () => {
    bars.classList.toggle("fa-times");
    bars.classList.toggle("fa-bars");
    nav.classList.toggle("header__nav--isActive");
  });
  navItems.forEach((item) =>
    item.addEventListener("click", () => {
      nav.classList.toggle("header__nav--isActive");
    })
  );
};

const handleBoxShadow = function () {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= hero.offsetHeight / 3) {
      header.classList.add("header--isActive");
    } else {
      header.classList.remove("header--isActive");
    }
  });
};

const handleSlider = function () {
  const arrowLeft = document.querySelector(".fa-angle-left");
  const arrowRight = document.querySelector(".fa-angle-right");
  const track = document.querySelector(".services__track");
  const glide = document.querySelector(".services__glide");
  const glideWith = glide.offsetWidth;

  let translate = 0;
  let maxMove;

  glideWith === 300
    ? (maxMove = -1500)
    : glideWith === 600
    ? (maxMove = -1200)
    : glideWith === 900
    ? (maxMove = -900)
    : (maxMove = -1500);
  arrowRight.addEventListener("click", () => {
    if (translate > maxMove) {
      translate -= 300;
      track.style.transform = `translate(${translate}px)`;
    }
  });
  arrowLeft.addEventListener("click", () => {
    if (translate < 0) {
      translate += 300;
      track.style.transform = `translate(${translate}px)`;
    }
  });
};

window.addEventListener("load", () => {
  handleMenu();
  handleSlider();
  handleBoxShadow();
});

const validateInput = (validation, el, message) => {
  if (validation) {
    document.getElementById(el).innerHTML = message;
    setTimeout(() => {
      document.getElementById(el).innerHTML = "";
    }, 3000);
  }
};

document.querySelector(".contact__form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector('input[name="email"]').value;
  const plan = document.querySelector('select[name="plan"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  validateInput(
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    "emailErr",
    "Invalid email address!"
  );
  validateInput(plan === "", "planErr", "Select an option!");
  validateInput(message.length < 10, "messageErr", "Message is too short!");
});
