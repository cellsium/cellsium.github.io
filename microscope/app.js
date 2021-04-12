let mydata = JSON.parse(image);

const images = [];

let deg = document.querySelector('.deg');
const img = document.querySelector('img');
const range = document.querySelector('input[type="range"]');
range.value = 0;
// range.max = 360;
range.max = images.length - 1;
img.src = './images/' + images[0];

range.oninput = function() {
    img.src = './images/' + images[range.value];
    deg.innerHTML = range.value + `<sup>0</sup>`;
    console.log(img.src);
}