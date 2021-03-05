function adaptivSlider(countBox, margin, arrowLeft, adaptiv = false) {
    const sliderLine = document.querySelector('.slider-line');
    sliderLine.style.transition = 2 + 's';
    const sliderBox = document.querySelectorAll('.slider-box');
    const left = document.querySelector('.' + 'arrowLeft');
    const right = document.querySelector('.' + 'arrowRight');


    let sizeBox = 0;
    let countSizeBox = 0;

    if (adaptiv == false) {
        sliderBox.forEach(item => {
            sizeBox = item.offsetWidth;
        });
    } else if (adaptiv == true) {
        window.addEventListener('load', () => {
            sizeBox = innerWidth / countBox + (margin * 2);

            sliderBox.forEach(item => {
                item.style.minWidth = sizeBox + 'px';
            })
        });
    }







    function leftSlide() {
        countSizeBox = countSizeBox + (sizeBox + (margin * 2));
        sliderLine.style.transform = `translate(-${countSizeBox}px)`;
    }

    left.addEventListener('click', leftSlide);
};
adaptivSlider(2, 5, 'arrowLeft', true);