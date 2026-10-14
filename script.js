
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-dot");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");

let currentSlide = 0;
let sliderTimer;

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
        dot.setAttribute("aria-current",
            i === currentSlide ? "true" : "false");
    });
}

function startSlider() {
    clearInterval(sliderTimer);

    sliderTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlider();
});

prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        startSlider();
    });
});

showSlide(0);
startSlider();
