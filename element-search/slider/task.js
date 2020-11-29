const arrowPrev = document.querySelector("div.slider__arrow_prev");
const arrowNext = document.querySelector("div.slider__arrow_next");
const sliderItem = [...document.getElementsByClassName("slider__item")];
const sliderDots = [...document.getElementsByClassName("slider__dot")];
let numSlide = 0;

arrowNext.onclick = () => {
  if (sliderItem[numSlide].className.includes("slider__item slider__item_active")) {
    if (numSlide < sliderItem.length - 1) {
      sliderItem[numSlide].className = "slider__item";
      sliderDots[numSlide].className = "slider__dot";
      sliderItem[numSlide + 1].className = "slider__item slider__item_active";
      sliderDots[numSlide + 1].className = "slider__dot slider__dot_active";
      numSlide++;
    } else {
      sliderItem[numSlide].className = "slider__item";
      sliderDots[numSlide].className = "slider__dot";
      numSlide = 0;
      sliderItem[numSlide].className = "slider__item slider__item_active";
      sliderDots[numSlide].className = "slider__dot slider__dot_active";
    }
  }
};

arrowPrev.onclick = () => {
  if (sliderItem[numSlide].className.includes("slider__item slider__item_active")) {
    if (numSlide > 0) {
      sliderItem[numSlide].className = "slider__item";
      sliderDots[numSlide].className = "slider__dot";
      sliderItem[numSlide - 1].className = "slider__item slider__item_active";
      sliderDots[numSlide - 1].className = "slider__dot slider__dot_active";
      numSlide--;
    } else {
      sliderItem[numSlide].className = "slider__item";
      sliderDots[numSlide].className = "slider__dot";
      numSlide = sliderItem.length - 1;
      sliderItem[numSlide].className = "slider__item slider__item_active";
      sliderDots[numSlide].className = "slider__dot slider__dot_active";
    }
  }
};

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = () => {
    if (sliderDots[i].className.includes("slider__item slider__item_active") === false) {
      sliderItem[numSlide].className = "slider__item";
      sliderDots[numSlide].className = "slider__dot";
      numSlide = i;
      sliderItem[numSlide].className = "slider__item slider__item_active";
      sliderDots[numSlide].className = "slider__dot slider__dot_active";
    }
  };
}
