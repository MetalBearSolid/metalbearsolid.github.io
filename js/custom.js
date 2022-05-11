// Selecting stuff from the DOM
const leftBoxSlide = document.querySelectorAll('.left-box-info'); //Selecting all the left side boxes
const rightBoxSlide = document.querySelectorAll('.right-box-img'); //Selecting all the right side boxes
const next = document.querySelector('#next');//Select next ID
const prev = document.querySelector('#prev');//Select prev ID

//Next button to shift the 2 boxes right
nextSlide = function() {
  //Grab the current-left class
  const currentLeft = document.querySelector('.current-left');
  //Grab the current-right class
  const currentRight = document.querySelector('.current-right');

  currentLeft.classList.remove('current-left');
  currentRight.classList.remove('current-right');

  if(currentLeft.nextElementSibling) {
    currentLeft.nextElementSibling.classList.add('current-left');
  } else {
    leftBoxSlide[0].classList.add('current-left');
  }  
  
  if(currentRight.nextElementSibling){
    currentRight.nextElementSibling.classList.add('current-right');
  } else {
    rightBoxSlide[0].classList.add('current-right');
  }
};

//Previous button to shift the 2 boxes left
prevSlide = function() {
  // Grab the current-left class
  const currentLeft = document.querySelector('.current-left');
  //Grab the current-right class
  const currentRight = document.querySelector('.current-right');

  currentLeft.classList.remove('current-left');
  currentRight.classList.remove('current-right');

  if(currentLeft.previousElementSibling) {
    currentLeft.previousElementSibling.classList.add('current-left');
  } else {
    leftBoxSlide[leftBoxSlide.length -1].classList.add('current-left');
  }

  if(currentRight.previousElementSibling) {
    currentRight.previousElementSibling.classList.add('current-right');
  } else {
    rightBoxSlide[rightBoxSlide.length -1].classList.add('current-right');
  }
};

//Add button events
next.addEventListener("click", function() {
  nextSlide();
});

prev.addEventListener("click", function(){
  prevSlide();
});

//Typewriter
const texts = ['code', 'fun stuff', 'bye...'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

	if(count === texts.length){
		count = 0;
	}
	currentText = texts[count];
	letter = currentText.slice(0, ++index);

	document.querySelector('.typing').textContent = letter;
	if(letter.length === currentText.length){
		count++
		index = 0;
	}
	setTimeout(type, 320);

}());


