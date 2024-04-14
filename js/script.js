function toggleNav() {
  var nav = document.querySelector('#toggle-item');
  nav.classList.toggle('active');
  // nav.style.display ='block';
  
}

// Bank Credit cards section scrolling effect

function creditCardSection(){

let wrapper = document.querySelector("#credit-wrapper");
let creditcarousel = document.querySelector("#credit-carousel");
let firstCardWidth = creditcarousel.querySelector(".card").offsetWidth;
let arrowBtns = document.querySelectorAll("#credit-wrapper i");
let creditcarouselChildrens = [...creditcarousel.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the creditcarousel at once
let cardPerView = Math.round(creditcarousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of creditcarousel for infinite scrolling
creditcarouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    creditcarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of creditcarousel for infinite scrolling
creditcarouselChildrens.slice(0, cardPerView).forEach(card => {
    creditcarousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the creditcarousel at appropriate postition to hide first few duplicate cards on Firefox
creditcarousel.classList.add("no-transition");
creditcarousel.scrollLeft = creditcarousel.offsetWidth;
creditcarousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the creditcarousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        creditcarousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

// const dragStart = (e) => {
//     isDragging = true;
//     creditcarousel.classList.add("dragging");
//     // Records the initial cursor and scroll position of the creditcarousel
//     startX = e.pageX;
//     startScrollLeft = creditcarousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the creditcarousel based on the cursor movement
//     creditcarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     creditcarousel.classList.remove("dragging");
// }

let infiniteScroll = () => {
    // If the creditcarousel is at the beginning, scroll to the end
    if(creditcarousel.scrollLeft === 0) {
        creditcarousel.classList.add("no-transition");
        creditcarousel.scrollLeft = creditcarousel.scrollWidth - (2 * creditcarousel.offsetWidth);
        creditcarousel.classList.remove("no-transition");
    }
    // If the creditcarousel is at the end, scroll to the beginning
    else if(Math.ceil(creditcarousel.scrollLeft) === creditcarousel.scrollWidth - creditcarousel.offsetWidth) {
        creditcarousel.classList.add("no-transition");
        creditcarousel.scrollLeft = creditcarousel.offsetWidth;
        creditcarousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over creditcarousel
    // clearTimeout(timeoutId);
    // if(!wrapper.matches(":hover")) autoPlay();
}

// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//     // Autoplay the creditcarousel after every 2500 ms
//     timeoutId = setTimeout(() => creditcarousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();

// creditcarousel.addEventListener("mousedown", dragStart);
// creditcarousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
creditcarousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);


}
creditCardSection()

// insurance Section Scrolling effect 

function insuranceSection(){
  wrapper = document.querySelector("#insurance-wrapper");
  let insuranceCarousel = document.querySelector("#insurance-carousel");
  firstCardWidth = insuranceCarousel.querySelector(".card").offsetWidth;
  arrowBtns = document.querySelectorAll("#insurance-wrapper i");
  carouselChildrens = [...insuranceCarousel.children];
 
 
 // Get the number of cards that can fit in the insuranceCarousel at once
  cardPerView = Math.round(insuranceCarousel.offsetWidth / firstCardWidth);
 
 // Insert copies of the last few cards to beginning of carousel for infinite scrolling
 carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
   insuranceCarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
 });
 
 // Insert copies of the first few cards to end of insuranceCarousel for infinite scrolling
 carouselChildrens.slice(0, cardPerView).forEach(card => {
   insuranceCarousel.insertAdjacentHTML("beforeend", card.outerHTML);
 });
 
 // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
 insuranceCarousel.classList.add("no-transition");
 insuranceCarousel.scrollLeft = insuranceCarousel.offsetWidth;
 insuranceCarousel.classList.remove("no-transition");
 
 // Add event listeners for the arrow buttons to scroll the carousel left and right
 arrowBtns.forEach(btn => {
     btn.addEventListener("click", () => {
       insuranceCarousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
     });
 });
 
  infiniteScroll = () => {
   // If the carousel is at the beginning, scroll to the end
   if(insuranceCarousel.scrollLeft === 0) {
     insuranceCarousel.classList.add("no-transition");
     insuranceCarousel.scrollLeft = insuranceCarousel.scrollWidth - (2 * insuranceCarousel.offsetWidth);
     insuranceCarousel.classList.remove("no-transition");
   }
   // If the carousel is at the end, scroll to the beginning
   else if(Math.ceil(insuranceCarousel.scrollLeft) === insuranceCarousel.scrollWidth - insuranceCarousel.offsetWidth) {
     insuranceCarousel.classList.add("no-transition");
     insuranceCarousel.scrollLeft = insuranceCarousel.offsetWidth;
     insuranceCarousel.classList.remove("no-transition");
   }}
 
   insuranceCarousel.addEventListener("scroll", infiniteScroll);

}
insuranceSection()

// loans Section Scrolling effect 
function loanSection(){
  wrapper = document.querySelector("#loan-wrapper");
 let loancarousel = document.querySelector("#loan-carousel");
 firstCardWidth = loancarousel.querySelector(".card").offsetWidth;
 arrowBtns = document.querySelectorAll("#loan-wrapper i");
 carouselChildrens = [...loancarousel.children];


// Get the number of cards that can fit in the loancarousel at once
 cardPerView = Math.round(loancarousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  loancarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of loancarousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
  loancarousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
loancarousel.classList.add("no-transition");
loancarousel.scrollLeft = loancarousel.offsetWidth;
loancarousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      loancarousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

 infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if(loancarousel.scrollLeft === 0) {
    loancarousel.classList.add("no-transition");
    loancarousel.scrollLeft = loancarousel.scrollWidth - (2 * loancarousel.offsetWidth);
    loancarousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if(Math.ceil(loancarousel.scrollLeft) === loancarousel.scrollWidth - loancarousel.offsetWidth) {
    loancarousel.classList.add("no-transition");
    loancarousel.scrollLeft = loancarousel.offsetWidth;
    loancarousel.classList.remove("no-transition");
  }}

  loancarousel.addEventListener("scroll", infiniteScroll);

}
loanSection()
 