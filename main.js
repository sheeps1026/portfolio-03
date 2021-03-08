// Testimonials
const CLASS_ACTIVE = "active";

const btnPrev = document.querySelector(".testimonials-btn__prev");
const btnNext = document.querySelector(".testimonials-btn__next");

const cards = document.querySelectorAll(".testimonials-card");

const firstCard = document.querySelector(".testimonials-card:first-child");
const lastCard = document.querySelector(".testimonials-card:last-child");

const indicator = document.querySelectorAll(".indicator");

let index = 0;

for (let i = 0; i < cards.length; i++) {
  if (cards[i].classList.contains("active")) {
    index = i;
  }
}

function display() {
  let num;

  for (let i = 0; i < indicator.length; i++) {
    cards[i].classList.remove("active");
    indicator[i].classList.remove("active");
  }

  this.classList.add("active");

  for (let i = 0; i < indicator.length; i++) {
    if (indicator[i].classList.contains("active")) {
      num = i;
    }
  }
  cards[num].classList.add("active");
  index = num;
  // console.log(index);
}

function prevMove() {
  cards[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index--;
  // console.log(index);

  // if (index < 0) {
  //   index = 4;
  // }
  if (index < 0) {
    index = cards.length - 1;
  }

  indicator[index].classList.add("active");
  cards[index].classList.add("active");
}

function nextMove() {
  cards[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index++;
  // console.log(index);

  if (index == cards.length) {
    index = 0;
  }

  indicator[index].classList.add("active");
  cards[index].classList.add("active");
}

btnPrev.onclick = prevMove;
btnNext.onclick = nextMove;

indicator.forEach((e) => {
  e.onclick = display;
});
