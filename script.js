// const slides=document.querySelectorAll('.slide');
// function slideShow(){
//     //get current slide
//     const current=document.querySelector(".active");
//     //remove active class
//     current.classList.remove('active');
//     //if there is a next slide(next element sibling)
//     if(current.nextElementSibling){
//         //add active class to next slide
//         current.nextElementSibling.classList.add('active');


//     }
//     else{
//         //add active class to first slide
//         slides[0].classList.add('active')
//     }
//     setTimeout('slideShow()',3000);
//     // 3000 will make 3s per slide which will match our progess bar

// }
// //load the function when the page loads

// window.onload=slideShow;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress__animation');
let currentSlide = 0;
const slideDuration = 3000; // 3 seconds

// Function to show the next slide and reset the progress bar
function showNextSlide() {
    // Remove 'active' class from the current slide
    slides[currentSlide].classList.remove('active');

    // Move to the next slide or loop back to the first
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');

    // Reset the progress bar width
    progressBar.style.width = '0%';

    // Animate the progress bar over the slide duration
    let startTime = Date.now();
    const animateProgressBar = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / slideDuration) * 100, 100);
        progressBar.style.width = `${progress}%`;

        // Continue updating until we reach 100%
        if (progress < 100) {
            requestAnimationFrame(animateProgressBar);
        }
    };
    requestAnimationFrame(animateProgressBar);
}

// Initial call and interval setup for automatic slide change
showNextSlide();
setInterval(showNextSlide, slideDuration);
