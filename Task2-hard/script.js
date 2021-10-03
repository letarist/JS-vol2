let goods = [
    {
        author: 'Eric Metiz',
        titleBook: 'Learn Python',
        price: 300
    }, {
        author: 'Franc Kafka',
        titleBook: 'Castle',
        price: 200
    },
    {
        author: 'Jack London',
        titleBook: 'Martin Iden',
        price: 500
    },
    {
        author: 'Martin Zussak',
        titleBook: 'Thief book',
        price: 450
    }, {
        author: 'J.R.Roaling',
        titleBook: 'Harry Potter',
        price: 9000,
    }
]
localStorage.removeItem('mainObject') // Ситуативная, использовал для эксперимента
let basket = document.querySelector('.cart-button');
let totSpan = document.querySelector('.total-span');
function f() {
    goods.forEach((i, ind) => {
        const renderGoodsItem = ({ author, titleBook, price }) => `<div class = 'goods-item'><h3>${author}</h3>
        <p>${titleBook}</p>
        <p>${price}</p>
        </div>`
        let goodsList = renderGoodsItem(i);
        let gi = document.querySelector('.goods-list');
        let itemClass = document.createElement('DIV');
        itemClass.classList = 'goods';
        itemClass.innerHTML = goodsList;
        let btn = document.createElement('button');
        btn.classList = 'cart-button item-button';
        btn.id = ind;
        btn.textContent = 'Купить';
        itemClass.appendChild(btn);
        gi.appendChild(itemClass);

    });


}

window.onload = f();


let btn = document.querySelectorAll('.item-button');
for (i of btn) {
    i.onclick = purchasedProduct;
}
var mainObject = []
function purchasedProduct() {

    let item = goods[this.id]
    mainObject.push(item)
    let main = localStorage.setItem('mainObject', JSON.stringify(mainObject))
    console.log(main)
}

