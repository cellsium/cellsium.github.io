const link = document.querySelectorAll('a');

link.forEach(item => {
  item.addEventListener('click', () => {
    link.forEach(item => {
      item.classList.remove('active');
      item.classList.add('deactive');
    });
    item.classList.remove('deactive');
    item.classList.add('active');
  });
});