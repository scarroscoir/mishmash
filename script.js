console.log("Script loaded test14");

// Password Check Function
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

// Curtain Animation Function with Background Music
function openCurtain() {
    const leftCurtain = document.getElementById('curtain-left');
    const rightCurtain = document.getElementById('curtain-right');

    leftCurtain.style.transform = 'translateX(-100%)';
    rightCurtain.style.transform = 'translateX(100%)';

    setTimeout(() => {
        document.getElementById('portfolio-content').style.display = 'block';
        document.body.style.overflow = 'auto';
        showSlides(); // Show the first slide when curtains open

        // Play background music
        const music = document.getElementById('background-music');
        if (music) {
            music.play();
        }
    }, 2000);
}

// Slideshow Variables and Functionality
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Ensure slideIndex is within bounds
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    console.log(`Displaying slide index: ${slideIndex}`);

    // Display the current slide
    slides[slideIndex].style.display = "block";
}

// Navigation for Slideshow
document.querySelector(".next").addEventListener("click", function() {
    console.log(`Before incrementing: slideIndex = ${slideIndex}`);
    slideIndex++; // Increment the slide index by 1
    showSlides();
});

document.querySelector(".prev").addEventListener("click", function() {
    console.log(`Before decrementing: slideIndex = ${slideIndex}`);
    slideIndex--; // Decrement the slide index by 1
    showSlides();
});

// Initial Setup
window.onload = function() {
    document.getElementById('portfolio-content').style.display = 'none';
};
