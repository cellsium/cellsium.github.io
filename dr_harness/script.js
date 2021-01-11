let box1 = document.querySelector('.main__catalog_sale');

class BoxSale {
    constructor(src, percent, name, countSize, discount, sale, buttonName) {
        this.src = src; // адрес картинки
        this.percent = percent; // скидка в процентах
        this.name = name; // Заголовок(название товара)
        this.countSize = countSize; //Размеры в наличии (слева на право)
        this.discount = discount; //Скидка (цена старая)
        this.sale = sale; //Цена продажи
        this.buttonName = buttonName; //Имя кнопки(надпись)
    }

    render() {
        let box = `<div class="main__catalog_box">
        <div class="main__catalog_discount">${this.percent}</div>
        <img src="${this.src}" alt="product">
        <h1>${this.name}</h1>
        <ul>
            <li>xs</li>
            <li>s</li>
            <li>m</li>
            <li>l</li>
            <li>xl</li>
            <li>xxl</li>
        </ul>
        <div class="main__catalog_color">
            <div class="main__catalog_color-black"></div>
            <div class="main__catalog_color-red"></div>
        </div>
        <div class="main__catalog_box-price">
            <p>${this.discount}</p>
            <p>${this.sale}</p>
        </div>
        <button class="btn button">${this.buttonName}</button>
        </div>`

        box1.innerHTML = box1.innerHTML + box;

    }
}


let cardSale = new BoxSale('./images/sale/1.jpg', '-53%', 'Портупея "Пеппи"', 1, '4990 p.', '2990 p.', 'заказать');
cardSale.render();
let cardSale2 = new BoxSale('./images/sale/2.jpg', '-53%', 'Портупея "Влади"', 2, '4991 p.', '2990 p.', 'заказать');
cardSale2.render();
let cardSale3 = new BoxSale('./images/sale/3.jpg', '-53%', 'Портупея "Джони Миллер"', 2, '4992 p.', '2990 p.', 'заказать');
cardSale3.render();
let cardSale4 = new BoxSale('./images/sale/1.jpg', '-53%', 'Портупея "Пеппи"', 2, '4993 p.', '2990 p.', 'заказать');
cardSale4.render();
let cardSale5 = new BoxSale('./images/sale/2.jpg', '-53%', 'Портупея "Влади"', 2, '4994 p.', '2990 p.', 'заказать');
cardSale5.render();
let cardSale6 = new BoxSale('./images/sale/3.jpg', '-53%', 'Портупея "Джони Миллер"', 2, '4995 p.', '2990 p.', 'заказать');
cardSale6.render();