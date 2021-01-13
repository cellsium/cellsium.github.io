const link = document.querySelectorAll('a');

link.forEach(item => {
  item.addEventListener('click', () => {
    link.forEach(item => {
      item.classList.remove('active');
    })
    item.classList.add('active');
  });
})

document.getElementById('scroll').onclick = () => {
  const scroll = window.innerHeight;
  window.scrollTo({
    top: scroll,
    behavior: 'smooth'
  })
}
