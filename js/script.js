document.addEventListener("DOMContentLoaded", _ => {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector('.hero-container');
    let index = 0;
    const timer = 10000;
    let timerId;

    function startSlider() {
        timerId = setInterval(_=> {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }, timer);
    }
    
    function stopSlider() {
        clearInterval(timerId);
    }

    startSlider();

    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
});