function toggleClass(targetItem, primaryClass, secondaryClass, outNumber, adaptiv) {

  // targetItem       класс элементов который нужно листать
  // primaryClass     название класса который делает элемент активным
  // secondaryClass   название класса который делает элемент не активным
  // outNumber        класс блока в который нудно выводить кликабельную нумерацию элементов ('' -- отключено)
  // adaptiv          изменение ширины блока равную ширине окна браузера ('' -- отключено)

  const link = document.querySelectorAll('.' + targetItem);

  link.forEach((item, value) => {

    if (adaptiv != '') {
      item.style.width = innerWidth + 'px';
      // item.style.height = innerHeight + 'px';
    }

    if (outNumber != '') {
      let p = document.createElement('p');
      p.classList.add('p');
      p.innerHTML = '0' + (value + 1);
      document.querySelector('.' + outNumber).append(p);

      p.addEventListener('click', () => {
        document.querySelectorAll('.p').forEach(item => {
          item.style.opacity = '.4';
          item.style.transform = 'scale(1)';
        });
        p.style.transform = 'scale(2)';
        p.style.opacity = '1';
        link.forEach(item => {
          item.classList.remove('visible');
          item.classList.add('unvisible');
        })
        if (item.classList != 'visible') {
          item.classList.remove('unvisible');
          item.classList.add('visible');
        }
      })
    };

    item.addEventListener('click', () => {
      link.forEach(item => {
        item.classList.remove(primaryClass);
        item.classList.add(secondaryClass);
      });
      item.classList.remove(secondaryClass);
      item.classList.add(primaryClass);
    });
  });
}

toggleClass('nav', 'active', 'deactive', '', '');
toggleClass('header__container-block', 'visible', 'unvisible', 'header-point');
