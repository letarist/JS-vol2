let goods = [
    {
        author: 'Eric Metiz',
        titleBook: 'Learn Python',
        price: 300,
    }, {
        author: 'Franc Kafka',
        titleBook: 'Castle',
        price: 200,
    },
    {
        author: 'Jack London',
        titleBook: 'Martin Iden',
        price: 500,
    },
    {
        author: 'Martin Zussak',
        titleBook: 'Thief book',
        price: 450,
    }
]
function f() {
    for (i of goods) {
        const renderGoodsItem = ({ author, titleBook, price }) => `<div class = 'goods-item'><h3>${author}</h3><p>${titleBook}</p><p>${price}</p></div>`
        let goodsList = renderGoodsItem(i);
        let gi = document.querySelector('.goods-list');
        let itemClass = document.createElement('DIV');
        itemClass.classList = 'goods';
        itemClass.innerHTML = goodsList;
        let btn = document.createElement('button');
        btn.classList = 'cart-button item-button';
        btn.textContent = 'Купить';
        itemClass.appendChild(btn);
        gi.appendChild(itemClass);
    }
}

window.onload = f();