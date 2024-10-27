console.log("Script loaded test11");

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

    console.log(`Displaying slide index: ${slideIndex}`); // Log the slide index

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

document.querySelector(".next").addEventListener("click", function() {
    console.log(`Before incrementing: slideIndex = ${slideIndex}`);
    slideIndex += 1;
    console.log(`After incrementing: slideIndex = ${slideIndex}`);
    showSlides();
});

document.querySelector(".prev").addEventListener("click", function() {
    console.log(`Before decrementing: slideIndex = ${slideIndex}`);
    slideIndex -= 1;
    console.log(`After decrementing: slideIndex = ${slideIndex}`);
    showSlides();
});

// Initial setup to hide content until curtains open and show first slide
window.onload = function() {
    document.getElementById('portfolio-content').style.display = 'none';
    showSlides(); // Display the first slide by default
};
