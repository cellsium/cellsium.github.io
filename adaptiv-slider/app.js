function adaptivSlider(margin) {
    const sliderLine = document.querySelector('.slider-line');
    const sliderBox = document.querySelectorAll('.slider-box');

    window.addEventListener('resize', () => {
        let summSliderBox = 0;
        sliderBox.forEach(element => {
            summSliderBox += element.offsetWidth;
        });
        sliderLine.style.width = (summSliderBox + (margin * 2)) + 'px';
    });
};
adaptivSlider('5');