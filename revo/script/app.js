document.querySelector('.header__menu-button').onclick = () => {
  document.querySelector('.header__menu').classList.toggle('show');
}


const imgBox = document.querySelectorAll('.main__tablet-box img');
const tablet = document.querySelectorAll('.main__tablet-box');

imgBox.forEach(item => {
  let src, value;

  item.addEventListener('mouseenter', () => {
    src = item.attributes.src.value;
    value = item.attributes.value.value;
    item.attributes.src.value = value;
  });

  item.addEventListener('mouseleave', () => {
    item.attributes.src.value = src;
  });
})