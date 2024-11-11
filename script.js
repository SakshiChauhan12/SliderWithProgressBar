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
const progressAnimation = document.getElementById('progress__animation');
let currentIndex = 0;
let autoSlideInterval;

// Function to show the current slide based on index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    resetProgressBar();
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Reset and restart the progress bar animation
function resetProgressBar() {
    progressAnimation.style.animation = 'none';
    // Trigger reflow to restart animation
    void progressAnimation.offsetWidth;
    progressAnimation.style.animation = 'moving 3s linear infinite';
}

// Start auto-slide function
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

// Stop auto-slide function
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

// Initial load
window.onload = () => {
    showSlide(currentIndex);
    startAutoSlide();
};
