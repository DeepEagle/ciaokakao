let currentIndex = 0;
function imageButtonPressed (slider) {
  updateSlider(slider)
}

function updateSlider(position) {
  console.log(position);
  
  const slider = document.querySelector('.imageSliderContainer');

slider.style.transform = `translateX(-${position *  100}%)`;

}
