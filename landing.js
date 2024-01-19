const sliders = document.querySelector(".carouselbox");
let scrollPerClick;
let ImagePadding = 100;

let scrollAmount = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
       top: 0,
       left: (scrollAmount -= scrollPerClick),
       behavior: "smooth" 
    });

    if(scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRight() {
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top:0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        })
    }
}

async function showMovieData() {
    let result = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=99c1bd93074ca026e0d69bdb968c067a&sort_by=popularity.desc`);
    let response = await result.json();

    let data = response.results;
    data.map(function(cur, index){
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w500/${cur.poster_path}"/>`
        );
    });
    scrollPerClick = 1500;
    // document.querySelector(".img-1").clientWidth + ImagePadding;
}
showMovieData();

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}