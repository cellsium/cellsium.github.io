const slider = document.querySelector('.header__slider');
const sliderLine = document.querySelector('.header__slider-line');
const sliderBlock = document.querySelectorAll('.header__slider-block');

let position;
let count;
let maxBlock;
let blockPosition = 0;
let maxWidth = 0;
let speedSlide = 0.6;

window.addEventListener('resize', size);

size();

function size() {
    sliderBlock.forEach(elem => {
        elem.style.width = window.innerWidth + 'px';
        maxWidth += parseFloat(elem.style.width);
    });
}

function upMouse() {
    if (count < 0 && blockPosition != -(maxWidth - window.innerWidth)) {
        blockPosition -= window.innerWidth;
    } else if (count > 0 && blockPosition != 0) {
        blockPosition += window.innerWidth;
    }
    removeEventListener('mousemove', moveMouse);
    removeEventListener('mousemove', downMouse);
    position = 0;
    count = 0;
}

function downMouse(event) {
    count = 0;
    position = 0;
    position = event.pageX;
    slider.addEventListener('mousemove', moveMouse);
}

function moveMouse(event) {
    if (position < event.pageX && position != 0) {
        count = count + 1;
    } else if (position > event.pageX && position != 0) {
        count = count - 1;
    }
    sliderLine.style.transition = speedSlide + 's';
    sliderLine.style.transform = `translate(${blockPosition}px)`;
}

function left() {
    if (blockPosition != -(maxWidth - innerWidth)) {
        blockPosition -= window.innerWidth;
    }
    sliderLine.style.transform = `translate(${blockPosition}px)`;
}

function right() {
    if (blockPosition != 0) {
        blockPosition += window.innerWidth;
    }
    sliderLine.style.transform = `translate(${blockPosition}px)`;
}

slider.addEventListener('mousedown', downMouse);
slider.addEventListener('mouseup', upMouse);
document.querySelector('.left').addEventListener('click', left);
document.querySelector('.right').addEventListener('click', right);




// nextSlider

// experiment by                  electr0ivan@mail.ru

//  chief                         Контейнер слайдера
//  sliderLine                    контейнер с блоками слайдера
//  sliderBlock                   блок слайдера
//  arrowLeft                     кнопка влево
//  arrowRight                    кнопка вправо
//  marginBlock                   если есть margin слева и справа от блок слайдера
//  transition                    transition для плавной прокрутки
//  countSlideBlock               количество перелистывания блоков
//  lineWidthBlock                сколько блоков показывать в слайдере (максимум 3)
//  adaptiv                       автоисчезновение слайдов при изменении разрешения окна (по умолчанию отключено false)


function sliderMove(chief, sliderLine, sliderBlock, arrowLeft, arrowRight, marginBlock, transition, countSlideBlock, lineWidthBlock, adaptiv = false) {

    const chiefSlider = document.querySelector('.' + chief);
    const line = document.querySelector('.' + sliderLine);
    const block = document.querySelectorAll('.' + sliderBlock);
    const left = document.querySelector('.' + arrowLeft);
    const right = document.querySelector('.' + arrowRight);

    let sizeBlock;
    let slice;
    let maxSize = 0;
    let count = 0;

    block.forEach(item => {
        sizeBlock = item.offsetWidth;
        maxSize += item.offsetWidth + marginBlock * 2;
    })

    if (lineWidthBlock > 3) lineWidthBlock = 3;


    if (adaptiv) {
        window.addEventListener('load', () => {
            if (window.screen.width >= (sizeBlock + marginBlock) * 3) {
                lineWidthBlock = 3;
            } else if (window.screen.width >= (sizeBlock + marginBlock) * 2) {
                lineWidthBlock = 2;
            } else if (window.screen.width >= (sizeBlock + marginBlock) * 1) {
                lineWidthBlock = 1;
            }
            chiefSlider.style.width = (sizeBlock + (marginBlock * 2)) * lineWidthBlock + 'px';

            if (lineWidthBlock == 1) {
                slice = (maxSize - (sizeBlock + marginBlock * 2));
            } else if (lineWidthBlock == 2) {
                slice = (maxSize - ((sizeBlock + marginBlock * 2) * 2));
            } else if (lineWidthBlock == 3) {
                slice = maxSize / 2;
            }
        })
        window.addEventListener('resize', () => {
            if (window.screen.width >= (sizeBlock + marginBlock) * 3) {
                lineWidthBlock = 3;
            } else if (window.screen.width >= (sizeBlock + marginBlock) * 2) {
                lineWidthBlock = 2;
            } else if (window.screen.width >= (sizeBlock + marginBlock) * 1) {
                lineWidthBlock = 1;
            }
            chiefSlider.style.width = (sizeBlock + (marginBlock * 2)) * lineWidthBlock + 'px';

            if (lineWidthBlock == 1) {
                slice = (maxSize - (sizeBlock + marginBlock * 2));
            } else if (lineWidthBlock == 2) {
                slice = (maxSize - ((sizeBlock + marginBlock * 2) * 2));
            } else if (lineWidthBlock == 3) {
                slice = maxSize / 2;
            }
        })
    }

    if (!adaptiv) {
        if (lineWidthBlock == 1) {
            slice = (maxSize - (sizeBlock + marginBlock * 2));
        } else if (lineWidthBlock == 2) {
            slice = (maxSize - ((sizeBlock + marginBlock * 2) * 2));
        } else if (lineWidthBlock == 3) {
            slice = maxSize / 2;
        }
    }

    function sizeLine() {
        chiefSlider.style.width = (sizeBlock + (marginBlock * 2)) * lineWidthBlock + 'px';
    }

    function leftSlide() {
        if (count < slice) {
            count += (sizeBlock + marginBlock * 2) * countSlideBlock;
        }
        line.style.transition = transition + 's';
        line.style.transform = `translate(-${count}px)`;
    }

    function rightSlide() {
        if (count != 0) {
            count -= (sizeBlock + marginBlock * 2) * countSlideBlock;
        }
        line.style.transition = transition + 's';
        line.style.transform = `translate(-${count}px)`;
    }

    // управление мышкой

    let touch = 0;
    let up = 0;

    // let touchD = 0;
    // let touchU = 0;

    function clickDown(e) {
        touch = e.clientX;
    }

    function clickUp(e) {
        up = e.clientX;
        if (up < touch) {
            leftSlide();
        } else {
            rightSlide();
        }
    }

    // function touchDown(e) {
    //     touchD = e.changedTouches[e.changedTouches.length - 1].pageX;
    // }

    // function touchUp(e) {
    //     touchU = e.changedTouches[e.changedTouches.length - 1].pageX;
    //     if (touchU < touchD) {
    //         leftSlide();
    //     } else {
    //         rightSlide();
    //     }
    // }

    sizeLine();

    // =====================
    let swipeFunc = {
        touches: {
            "touchstart": { "x": -1, "y": -1 },
            "touchmove": { "x": -1, "y": -1 },
            "touchend": false,
            "direction": "undetermined"
        },
        touchHandler: function (event) {
            var touch;
            if (typeof event !== 'undefined') {
                event.preventDefault();
                if (typeof event.touches !== 'undefined') {
                    touch = event.touches[0];
                    switch (event.type) {
                        case 'touchstart':
                        case 'touchmove':
                            swipeFunc.touches[event.type].x = touch.pageX;
                            swipeFunc.touches[event.type].y = touch.pageY;
                            break;
                        case 'touchend':
                            swipeFunc.touches[event.type] = true;
                            if (swipeFunc.touches.touchstart.x > -1 && swipeFunc.touches.touchmove.x > -1) {
                                swipeFunc.touches.direction = swipeFunc.touches.touchstart.x < swipeFunc.touches.touchmove.x ? rightSlide() : leftSlide();
                            }
                        default:
                            break;
                    }
                }
            }
        },
        init: function () {
            document.addEventListener('touchstart', swipeFunc.touchHandler, false);
            document.addEventListener('touchmove', swipeFunc.touchHandler, false);
            document.addEventListener('touchend', swipeFunc.touchHandler, false);
        }
    };
    swipeFunc.init();
    // =====================

    line.addEventListener('mousedown', clickDown);
    // line.addEventListener('touchstart', touchDown);
    line.addEventListener('mouseup', clickUp);
    // line.addEventListener('touchend', touchUp);
    left.addEventListener('click', leftSlide);
    right.addEventListener('click', rightSlide);
}

sliderMove('posts__slider', 'posts__slider-line', 'posts__slider-block', 'arrow-left', 'arrow-right', 10, 0.3, 1, 3, true);