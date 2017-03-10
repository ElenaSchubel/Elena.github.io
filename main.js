
var slideIndex = 0;

var t;
var timedelay=2000;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


  function showSlides(n) {
    var i;
   var slides = document.getElementsByClassName("slides");
   var dots = document.getElementsByClassName("dot");
   if (n==undefined){n = ++slideIndex}
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }

   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
    t = setTimeout(showSlides, timedelay);
}


function pauseSlides() {

              clearTimeout(t)
          }

          function startSlides() {

              t = setTimeout(showSlides, timedelay);
          }
