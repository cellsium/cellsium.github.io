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

document.getElementById('send').addEventListener('click', () => {

    let inp = document.getElementById('input');
    let pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (pattern.test(inp.value) == false) {
        inp.value = 'не корректно';
    };
});