//  experiment by                  electr0ivan@mail.ru

//  chief                         Контейнер слайдера
//  sliderLine                    контейнер с блоками слайдера
//  sliderBlock                   блок слайдера
//  arrowLeft                     кнопка влево
//  arrowRight                    кнопка вправо
//  marginBlock                   если есть margin слева и справа от блок слайдера
//  transition                    transition для плавной прокрутки
//  countSlideBlock               количество перелистывания блоков
//  lineWidthBlock                сколько блоков показывать в слайдере (максимум 3)
//  adaptiv                       уменьшение колличества слайдов при изменении разрешения окна (по умолчанию отключено false)
//  autoslide                     автослайд . false - отключить, true - включить


function sliderMove(chief, sliderLine, sliderBlock, arrowLeft, arrowRight, marginBlock, transition, countSlideBlock, lineWidthBlock, adaptiv = false, autoslide = false) {

    const chiefSlider = document.querySelector('.' + chief);
    const line = document.querySelector('.' + sliderLine);
    const block = document.querySelectorAll('.' + sliderBlock);

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
            };
            chiefSlider.style.width = (sizeBlock + (marginBlock * 2)) * lineWidthBlock + 'px';

            if (lineWidthBlock == 1) {
                slice = (maxSize - (sizeBlock + marginBlock * 2));
            } else if (lineWidthBlock == 2) {
                slice = (maxSize - ((sizeBlock + marginBlock * 2) * 2));
            } else if (lineWidthBlock == 3) {
                slice = maxSize / 2;
            };
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

    let touch = 0;
    let up = 0;

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

    sizeLine();

    let swipeFunc = {
        touches: {
            "touchstart": { "x": -1, "y": -1 },
            "touchmove": { "x": -1, "y": -1 },
            "touchend": false,
            "direction": "undetermined"
        },
        touchHandler: function (event) {
            let touch;
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
            line.addEventListener('touchstart', swipeFunc.touchHandler, false);
            line.addEventListener('touchmove', swipeFunc.touchHandler, false);
            line.addEventListener('touchend', swipeFunc.touchHandler, false);
        }
    };
    swipeFunc.init();


    if (autoslide == true) {
        setInterval(() => {
            if (count < slice + (sizeBlock + marginBlock * 2)) {
                leftSlide();

            } else {
                count = -(sizeBlock + marginBlock * 2);
            }
        }, 3000);
    };


    line.addEventListener('mousedown', clickDown);
    line.addEventListener('mouseup', clickUp);
    if (arrowLeft != '' && arrowRight != '') {
        document.querySelector('.' + arrowLeft).addEventListener('click', leftSlide);
        document.querySelector('.' + arrowRight).addEventListener('click', rightSlide);
    };
}

sliderMove('header__slider', 'header__slider-line', 'header__slider-block', 'left', 'right', 0, 0.3, 1, 1, false, false);
sliderMove('posts__slider', 'posts__slider-line', 'posts__slider-block', 'arrow-left', 'arrow-right', 10, 0.3, 1, 3, true, false);
sliderMove('main-container', 'main__partners-line', 'main__partners-block', '', '', 10, 0.3, 1, 3, true, false);


//  target                         класс блока в котором нужен счетчик
//  number                         цифра(число) до которого счетчик будет набирать
//  step                           прибавляемое значение
//  interval                       интервал прибавления каждого шага (мс)


function counter(target, number, step, interval) {
    let count = 0;

    let inter = setInterval(() => {
        if (count < number) {
            count = count + step;
        }
        document.querySelector('.' + target).innerHTML = count;
        if (count >= number) {
            clearInterval(inter);
        }
    }, interval);

}

counter('people', 3800, 50, 50);
counter('coffe', 250, 50, 50);
counter('message', 2500, 50, 50);
counter('like', 900, 50, 50);
counter('cap', 950, 50, 50);



window.addEventListener('scroll', () => {
    let lasy = document.querySelectorAll('.lasy');
    console.log(window.innerHeight);

    lasy.forEach(item => {
        console.log(item.getBoundingClientRect().top);
        if (item.getBoundingClientRect().top < window.innerHeight) {
            item.style.opacity = 1;
        }
    })
})