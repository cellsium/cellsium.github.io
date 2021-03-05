const headerLink = document.querySelectorAll('.header-link');

for (let i = 0; i < headerLink.length; i++) {
    headerLink[i].addEventListener('mouseenter', () => {
        if (i == 0) {
            headerLink[i].style.borderTop = `1px solid #aa4e4e`;
            headerLink[i].style.borderBottom = `1px solid #aa4e4e`;
            headerLink[i].style.borderRight = `1px solid #aa4e4e`;
        } else if (i == 1) {
            headerLink[i].style.borderTop = `1px solid #aa4e4e`;
            headerLink[i].style.borderBottom = `1px solid #aa4e4e`;
            headerLink[i].style.borderRight = `1px solid #aa4e4e`;
            headerLink[0].style.borderRight = `1px solid #aa4e4e`;
        } else if (i == 2) {
            headerLink[i].style.borderTop = `1px solid #aa4e4e`;
            headerLink[i].style.borderBottom = `1px solid #aa4e4e`;
            headerLink[1].style.borderRight = `1px solid #aa4e4e`;
            headerLink[3].style.borderLeft = `1px solid #aa4e4e`;
        } else if (i == 3) {
            headerLink[i].style.borderTop = `1px solid #aa4e4e`;
            headerLink[i].style.borderBottom = `1px solid #aa4e4e`;
            headerLink[i].style.borderLeft = `1px solid #aa4e4e`;
        }
    });
    headerLink[i].addEventListener('mouseleave', () => {
        if (i == 0) {
            headerLink[i].style.borderTop = `1px solid #FFFFFF`;
            headerLink[i].style.borderBottom = `1px solid #FFFFFF`;
            headerLink[i].style.borderRight = `1px solid #FFFFFF`;
        } else if (i == 1) {
            headerLink[i].style.borderTop = `1px solid #FFFFFF`;
            headerLink[i].style.borderBottom = `1px solid #FFFFFF`;
            headerLink[i].style.borderRight = `1px solid #FFFFFF`;
            headerLink[0].style.borderRight = `1px solid #FFFFFF`;
        } else if (i == 2) {
            headerLink[i].style.borderTop = `1px solid #FFFFFF`;
            headerLink[i].style.borderBottom = `1px solid #FFFFFF`;
            headerLink[1].style.borderRight = `1px solid #FFFFFF`;
            headerLink[3].style.borderLeft = `1px solid #FFFFFF`;
        } else if (i == 3) {
            headerLink[i].style.borderTop = `1px solid #FFFFFF`;
            headerLink[i].style.borderBottom = `1px solid #FFFFFF`;
            headerLink[i].style.borderLeft = `1px solid #FFFFFF`;
        }
    })
}

document.querySelector('.down').onclick = () => {
    const scroll = window.innerHeight;
    window.scrollTo({
        top: scroll,
        behavior: 'smooth'
    })
}