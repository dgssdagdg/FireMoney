const rangeOne = document.querySelector('.range-one');
const rangeTwo = document.querySelector('.range-two');
const inputSliderTwo = rangeTwo.querySelector("input");
const slideValueTwo = rangeTwo.querySelector("span");
const progressBarTwo = document.getElementById('progressBarTwo');

const slideValue = rangeOne.querySelector("span");
const inputSlider = rangeOne.querySelector("input");
const progressBar = document.getElementById('progressBar');
inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value/1000) + "%";
  progressBar.style.width = (value/1000) + "%";
});
inputSliderTwo.oninput = (()=>{
    let value = inputSliderTwo.value;
    slideValueTwo.textContent = value;
    slideValueTwo.style.left = (value/0.4) + "%";
    progressBarTwo.style.width = (value/0.4) + "%";
  });