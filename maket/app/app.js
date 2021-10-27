const slide = document.querySelectorAll('.main-slide');
const point = document.querySelectorAll('.point');

let count = 0;

function change() {
    slide.forEach(e => {
        e.style.opacity = '0';
    });
    if(this.classList == 'point'){
        slide[this['title']-1].style.opacity = '1';
        count = this['title']-1;
    }else if(this.classList == 'main-slide') {
        slide[count].style.opacity = '1';
        count++
        if(count == 4) {
            count = 0;
        }
    }
};

slide.forEach(function(e) {
    e.addEventListener('click', change);
});

point.forEach(function(e) {
    e.addEventListener('click', change);
});