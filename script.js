document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

    const fadeInOnScroll = () => {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Add 'show' when element enters viewport, remove when it leaves
            if (rect.top < windowHeight - 100 && rect.bottom > 0) {
                element.classList.add("show");
            } else {
                element.classList.remove("show"); // This makes animations replay on scroll
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run once on page load to catch elements already in view
});
