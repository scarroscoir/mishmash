console.log("Script loaded test10");

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
    console.log(`Displaying slide index: ${slideIndex}`); // Track displayed slide

    // Show the current slide
    slides[slideIndex].style.display = "block";  
}

// Navigation for Slideshow with Explicit State Control
document.querySelector(".next").addEventListener("click", function() {
    if (slideIndex < document.getElementsByClassName("mySlides").length - 1) {
        console.log(`Before incrementing: slideIndex = ${slideIndex}`);
        slideIndex++;
        console.log(`After incrementing: slideIndex = ${slideIndex}`);
        showSlides();
    }
});

document.querySelector(".prev").addEventListener("click", function() {
    if (slideIndex > 0) {
        console.log(`Before decrementing: slideIndex = ${slideIndex}`);
        slideIndex--;
        console.log(`After decrementing: slideIndex = ${slideIndex}`);
        showSlides();
    }
});

// Initial Setup
window.onload = function() {
    document.getElementById('portfolio-content').style.display = 'none'; // Keep content hidden until password is entered
};
