let index = 0;

// Pricing
const CLASS_SELECT = "select";

const pricingCards = document.querySelectorAll(".pricing-card");

const selectBtn = document.querySelectorAll(".select-btn");

function display() {
  let num;

  for (let i = 0; i < selectBtn.length; i++) {
    pricingCards[i].classList.remove("select");
    selectBtn[i].classList.remove("select");
  }

  this.classList.add("select");

  for (let i = 0; i < selectBtn.length; i++) {
    if (selectBtn[i].classList.contains("select")) {
      num = i;
    }
  }

  pricingCards[num].classList.add("select");
  index = num;
}

selectBtn.forEach((e) => {
  e.onclick = display;
});

// Testimonials
const CLASS_ACTIVE = "active";

const btnPrev = document.querySelector(".testimonials-btn__prev");
const btnNext = document.querySelector(".testimonials-btn__next");

const testimonialsCards = document.querySelectorAll(".testimonials-card");

const firstCard = document.querySelector(".testimonials-card:first-child");
const lastCard = document.querySelector(".testimonials-card:last-child");

const indicator = document.querySelectorAll(".indicator");

for (let i = 0; i < testimonialsCards.length; i++) {
  if (testimonialsCards[i].classList.contains("active")) {
    index = i;
  }
}

function navDots() {
  let num;

  for (let i = 0; i < indicator.length; i++) {
    testimonialsCards[i].classList.remove("active");
    indicator[i].classList.remove("active");
  }

  this.classList.add("active");

  for (let i = 0; i < indicator.length; i++) {
    if (indicator[i].classList.contains("active")) {
      num = i;
    }
  }
  testimonialsCards[num].classList.add("active");
  index = num;
  // console.log(index);
}

function prevMove() {
  testimonialsCards[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index--;
  // console.log(index);

  // if (index < 0) {
  //   index = 4;
  // }
  if (index < 0) {
    index = testimonialsCards.length - 1;
  }

  indicator[index].classList.add("active");
  testimonialsCards[index].classList.add("active");
}

function nextMove() {
  testimonialsCards[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index++;
  // console.log(index);

  if (index == testimonialsCards.length) {
    index = 0;
  }

  indicator[index].classList.add("active");
  testimonialsCards[index].classList.add("active");
}

btnPrev.onclick = prevMove;
btnNext.onclick = nextMove;

indicator.forEach((e) => {
  e.onclick = navDots;
});
