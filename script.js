function toggleNav() {
  var nav = document.querySelector('#toggle-item');
  nav.classList.toggle('active');
  // nav.style.display ='block';

  
}



// document.addEventListener("DOMContentLoaded", function() {
//   const prevBtn = document.getElementById("prev");
//   const nextBtn = document.getElementById("next");
//   const slider = document.getElementById("bank-logo");
//   const images = slider.querySelectorAll(".img-container");

//   let currentSlide = 0;
//   const totalSlides = images.length;

//   // Function to show the current slide
//   function showSlide(index) {
//       // Hide all slides
//       images.forEach(image => {
//           image.style.display = "none";
//       });
//       // Show the slide at the specified index
//       images[index].style.display = "block";
//   }

//   // Function to move to the previous slide
//   function prevSlide() {
//       currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//       showSlide(currentSlide);
//   }

//   // Function to move to the next slide
//   function nextSlide() {
//       currentSlide = (currentSlide + 1) % totalSlides;
//       showSlide(currentSlide);
//   }

//   // Add click event listeners to the previous and next buttons
//   prevBtn.addEventListener("click", prevSlide);
//   nextBtn.addEventListener("click", nextSlide);

//   // Show the initial slide (first image)
//   showSlide(currentSlide);
// });



