
function resizeContant(container, windowSize, percent) {

  // container   класс контролирующий ширину блока
  // windowSize  размер окна при котором ширина блока равна ширине окна
  // percent     отступ в % который требуется слева и справа от блока

  const adaptivContainer = document.querySelector('.' + container);

  let fullSize = innerWidth - (innerWidth / 100 * percent);
  let mobileSize = innerWidth;

  if (innerWidth >= windowSize) {
    adaptivContainer.style.width = fullSize + 'px';
  } else {
    adaptivContainer.style.width = mobileSize + 'px';
  }
};

resizeContant('', 1024, 20);
window.addEventListener('resize', () => { resizeContant('', 1024, 20) });

