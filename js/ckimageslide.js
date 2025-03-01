let currentIndex = 0;
const images = document.querySelectorAll('.sliderimg');
const totalImages = images.length;

function imageButtonPressed (slider) {
document.getElementById(`imgslide${slider}`).addEventListener('click', () => {
  updateSlider(slider)
  console.log(slider);
  
})
}

function updateSlider(position) {
  console.log(position);
  
  const slider = document.querySelector('.imageSliderContainer');

slider.style.transform = `translateX(-${position *  100}%)`;

}
