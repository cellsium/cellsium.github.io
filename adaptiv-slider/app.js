function adaptivSlider(margin) {
    const sliderLine = document.querySelector('.slider-line');
    const sliderBox = document.querySelectorAll('.slider-box');


    let summSliderBox = 0;

    function staticSize() {
        summSliderBox = window.innerWidth;
    }

    function calcMinMaxSize() {
        if (window.innerWidth < summSliderBox) {
            console.log('-');
        } else {
            console.log('+');
        }
        staticSize();
    }

    window.addEventListener('resize', calcMinMaxSize);
};
adaptivSlider(5);