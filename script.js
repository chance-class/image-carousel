

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;


const leftArrow = document.querySelector(".left");
leftArrow.addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  let current = document.querySelector(".current");
  current.classList.remove("current");
  let next = document.querySelector(`.cir${curSlide}`);
  next.classList.add("current");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  let nextActive = document.querySelector(`#img${curSlide}`);
  nextActive.classList.add("active");
})
const rightArrow = document.querySelector(".right");
rightArrow.addEventListener("click", () => {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  let current = document.querySelector(".current");
  current.classList.remove("current");
  let next = document.querySelector(`.cir${curSlide}`);
  next.classList.add("current");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  let nextActive = document.querySelector(`#img${curSlide}`);
  nextActive.classList.add("active");
})

setInterval(()=> {
    let currentSlide = document.querySelector(".active");
    let currentId = currentSlide.id;
    if (currentId === "img4") currentId = "img0";
    else currentId = `img${Number(currentId.replace("img", "")) + 1}`;
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - Number(currentId.replace("img", "")))}%)`;
      });
      let current = document.querySelector(".current");
  current.classList.remove("current");
  let next = document.querySelector(`.cir${Number(currentId.replace("img", ""))}`);
  next.classList.add("current");
  currentSlide.classList.remove("active");
  let nextActive = document.querySelector(`#${currentId}`);
  nextActive.classList.add("active");
  curSlide = Number(currentId.replace("img", ""));
}, 5000)

const cir0 = document.querySelector(".cir0");
cir0.addEventListener("click", () => {
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - 0)}%)`;
        let current = document.querySelector(".current");
  current.classList.remove("current");
  let next = document.querySelector(`.cir0`);
  next.classList.add("current");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  let nextActive = document.querySelector(`#img0`);
  nextActive.classList.add("active");
  curSlide = 0;
      });
})

const cir1 = document.querySelector(".cir1");
cir1.addEventListener("click", () => {
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - 1)}%)`;
        let current = document.querySelector(".current");
  current.classList.remove("current");
  let next = document.querySelector(`.cir1`);
  next.classList.add("current");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  let nextActive = document.querySelector(`#img1`);
  nextActive.classList.add("active");
  curSlide = 1;
      });
})

const cir2 = document.querySelector(".cir2");
cir2.addEventListener("click", () => {
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - 2)}%)`;
        let current = document.querySelector(".current");
  current.classList.remove("current");
  let next = document.querySelector(`.cir2`);
  next.classList.add("current");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  let nextActive = document.querySelector(`#img2`);
  nextActive.classList.add("active");
  curSlide = 2;
      });
})

const cir3 = document.querySelector(".cir3");
cir3.addEventListener("click", () => {
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - 3)}%)`;
        let current = document.querySelector(".current");
  current.classList.remove("current");
  let next = document.querySelector(`.cir3`);
  next.classList.add("current");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  let nextActive = document.querySelector(`#img3`);
  nextActive.classList.add("active");
  curSlide = 3;
      });
})

const cir4 = document.querySelector(".cir4");
cir4.addEventListener("click", () => {
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - 4)}%)`;
        let current = document.querySelector(".current");
  current.classList.remove("current");
  let next = document.querySelector(`.cir4`);
  next.classList.add("current");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  let nextActive = document.querySelector(`#img4`);
  nextActive.classList.add("active");
  curSlide = 4;
      });
})