console.log("Script loaded test21");

let slideIndex = 0; // Initialize slideIndex

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

function openCurtain() {
    const leftCurtain = document.getElementById('curtain-left');
    const rightCurtain = document.getElementById('curtain-right');

    leftCurtain.style.transform = 'translateX(-100%)';
    rightCurtain.style.transform = 'translateX(100%)';

    setTimeout(() => {
        document.getElementById('portfolio-content').style.display = 'block';
        document.body.style.overflow = 'auto';
        showSlides(); // Show the first slide when curtains open
        const music = document.getElementById('background-music');
        if (music) {
            music.play();
        }
    }, 2000);
}

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

    console.log(`Displaying slide index: ${slideIndex}`);
    slides[slideIndex].style.display = "block";  // Show the current slide
}

// Navigation for Slideshow
document.querySelector(".next").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior
    slideIndex++; // Increment index for next
    console.log(`Next clicked: slideIndex = ${slideIndex}`);
    showSlides(); // Show the updated slide
});

document.querySelector(".prev").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior
    slideIndex--; // Decrement index for previous
    console.log(`Prev clicked: slideIndex = ${slideIndex}`);
    showSlides(); // Show the updated slide
});

// Initial Setup
window.onload = function() {
    document.getElementById('portfolio-content').style.display = 'none'; // Keep content hidden until password is entered
    showSlides(); // Show the first slide when the page loads
};
