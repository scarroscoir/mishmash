console.log("Script loaded test8");

// Check Password Function
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'MISHMASHABÚ'; // Replace with your password

    if (password === correctPassword) {
        document.getElementById('password-modal').style.display = 'none';
        openCurtain();
    } else {
        alert('pasfhocal mícheart (brón orm)');
    }
}

// Curtain Animation Function with Background Music Play
function openCurtain() {
    const leftCurtain = document.getElementById('curtain-left');
    const rightCurtain = document.getElementById('curtain-right');

    leftCurtain.style.transform = 'translateX(-100%)';
    rightCurtain.style.transform = 'translateX(100%)';

    setTimeout(() => {
        document.getElementById('portfolio-content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Allow scrolling after curtains open
        showSlides(); // Show the first slide when curtains open

        // Play background music
        const music = document.getElementById('background-music');
        if (music) {
            music.play();
        }
    }, 2000); // Delay to match curtain animation duration
}

// Gallery Slideshow Functionality
let slideIndex = 0; // Current slide index

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Ensure slideIndex is within bounds
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide if at the end
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to the last slide if at the beginning
    }

    // Log the current slide index before showing
    console.log(`Displaying slide index: ${slideIndex}`); // Add this line

    // Show the current slide
    slides[slideIndex].style.display = "block";  

    // Optional: Update any title text or description
    const title = document.getElementById('slide-title');
    if (title && slides[slideIndex].querySelector('p')) {
        title.textContent = slides[slideIndex].querySelector('p').textContent;
    }
}

// Navigation for Slideshow
console.log("Adding event listener to next button");
document.querySelector(".next").addEventListener("click", function() {
    console.log(`Before incrementing: slideIndex = ${slideIndex}`); // Add log before increment
    slideIndex++; // Increment the slide index by 1
    console.log(`After incrementing: slideIndex = ${slideIndex}`); // Log after increment
    showSlides(); // Call showSlides to display the current slide
});

console.log("Adding event listener to prev button");
document.querySelector(".prev").addEventListener("click", function() {
    console.log(`Before decrementing: slideIndex = ${slideIndex}`); // Add log before decrement
    slideIndex--; // Decrement the slide index by 1
    console.log(`After decrementing: slideIndex = ${slideIndex}`); // Log after decrement
    showSlides(); // Call showSlides to display the current slide
});

// Initial Setup
window.onload = function() {
    document.getElementById('portfolio-content').style.display = 'none'; // Keep content hidden until password is entered
};
