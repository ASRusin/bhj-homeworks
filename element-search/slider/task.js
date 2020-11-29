const arrowPrev = document.querySelector("div.slider__arrow_prev");
const arrowNext = document.querySelector("div.slider__arrow_next");
const sliderItem = [...document.getElementsByClassName("slider__item")];
const sliderDots = [...document.getElementsByClassName("slider__dot")];
let numSlide = 0;

function isActive(item) {
  sliderItem[numSlide].className = "slider__item";
  sliderDots[numSlide].className = "slider__dot";
  numSlide = item;
  sliderItem[numSlide].className = "slider__item slider__item_active";
  sliderDots[numSlide].className = "slider__dot slider__dot_active";
}

arrowNext.onclick = () => {
  if (numSlide < sliderItem.length - 1) {
    isActive(numSlide + 1);
  } else {
    isActive(0);
  }
};

arrowPrev.onclick = () => {
  if (numSlide > 0) {
    isActive(numSlide - 1);
  } else {
    isActive(sliderItem.length - 1);
  }
};

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = () => isActive(i);
}

// Из интереса (клик по картинке):

const sliderImg = document.querySelector(".slider__arrows");
sliderImg.onclick = arrowNext.onclick;
