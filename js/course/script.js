const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
// const carouselChildrens = [...carousel.children];



// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);



// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});




 const courseWrapper = document.querySelector(".course-wrapper");
 const CourseCarouselusel = document.querySelector(".course-carousel");
 const CoursefirstCardWidth = CourseCarouselusel.querySelector(".card").offsetWidth;
 const CoursearrowBtns = document.querySelectorAll(".course-wrapper i");
// const carouselChildrens = [...carousel.children];



// Get the number of cards that can fit in the carousel at once
 cardPerView = Math.round(CourseCarouselusel.offsetWidth / CoursefirstCardWidth);



// Add event listeners for the arrow buttons to scroll the carousel left and right
CoursearrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        CourseCarouselusel.scrollLeft += btn.id == "left" ? -CoursefirstCardWidth : CoursefirstCardWidth;
    });
});


