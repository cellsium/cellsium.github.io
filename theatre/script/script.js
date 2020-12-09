let arrowPre = document.querySelector('#pre');
let arrowNext = document.querySelector('#next');
let title = document.querySelector('.header__slider_top');
let back = document.querySelector('.header__slider_back');

let arr = [
    './img/bilboard.png',
    './img/spb.png'
];
let num = 0;

arrowPre.addEventListener('click', function () {
    if (num == 0) {
        title.innerHTML = `<img src="${arr[1]}" alt="bilboard"></img>`;
        back.innerHTML = `<img src="${arr[0]}" alt="bilboard"></img>`;
        num = 1;
    } else {
        title.innerHTML = `<img src="${arr[0]}" alt="bilboard"></img>`;
        back.innerHTML = `<img src="${arr[1]}" alt="bilboard"></img>`;
        num = 0;
    }
});

arrowNext.addEventListener('click', function () {
    if (num == 0) {
        title.innerHTML = `<img src="${arr[1]}" alt="bilboard"></img>`;
        back.innerHTML = `<img src="${arr[0]}" alt="bilboard"></img>`;
        num = 1;
    } else {
        title.innerHTML = `<img src="${arr[0]}" alt="bilboard"></img>`;
        back.innerHTML = `<img src="${arr[1]}" alt="bilboard"></img>`;
        num = 0;
    }
});

let galleryLine = document.querySelector('.gallery__line');
let galleryPreview = document.querySelectorAll('.gallery__preview');
let galleryNext = document.querySelector('.gallery__next');

if (document.documentElement.clientWidth <= 992) {

    let count = 0;

    for (let i = 0; i < galleryPreview.length; i++) {
        galleryPreview[i].style.display = 'none';
        galleryPreview[count].style.display = 'flex';
    }

    function next() {
        if (count == 0) {
            return 1;
        } else if (count == 1) {
            return 2;
        } else if (count == 2) {
            return 3;
        } else if (count == 3) {
            return 0;
        }
    }

    galleryNext.addEventListener('click', function () {
        galleryPreview[count].style.display = 'none';
        count++;
        if (count >= 4) count = 0;
        galleryNext.innerHTML = galleryPreview[next()].innerHTML;
        galleryPreview[count].style.display = 'flex';
    })
}

let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__mobile');
let cross = document.querySelector('.header__mobile_cross');

burger.addEventListener('click', function () {
    nav.style.left = 0 + 'px';
});
cross.addEventListener('click', function () {
    nav.style.left = -300 + 'px';
})