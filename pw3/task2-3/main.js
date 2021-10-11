const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const dummyImgURL = "https://via.placeholder.com/150.png/55909C/969696";

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
            });

    }


    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => {
                if (result.ok) return result.json();
                else console.log('Error:', result);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
        block.insertAdjacentHTML('afterend', `<div class="total">ИТОГО: ${this.calcSum()} \u20bd</div>`);
    }
}

class ProductItem {
    constructor(product, img = dummyImgURL) {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price} \u20bd</p>
                <button class="button button_add-cart"><a class="button_link" href="#">Добавить в корзину</a></button>
            </div>`;
    }
}

class CartItem extends ProductItem {
    constructor(id, title, price, img, quantity, subtotal) {
        super(id, title, price, img, quantity);
        this.subtotal = this.price * this.quantity;
        this.shipping();
        this.render();
    }

    shipping() {

    }

    render() {
        return `<div class="cart-item" data-id="${this.id}">
                <img class="cart-item__img" src="${this.img}" alt="Some img">
                <div class="cart-item__txt">
                <h3 class="cart-item__h">${this.title}</h3>
                <p>${this.price} \u20bd</p>
                <p class="cart-item__quantity">${this.quantity} шт.</p>
                <p>${this.subtotal} \u20bd</p>
                </div>
            </div>`;
    }

}

class Cart {
    constructor(container = ".cart", paymentAddress, containerCount = ".header-cart__count") {
        this.container = container;
        this.containerCount = containerCount;
        this.goods = [];
        this.goodsAmount = 0;
        this.goodsCount = 0;
        this.allItems = [];
        this.paymentAddress = paymentAddress;
        this._getCart()
            .then(data => {
                this.goodsAmount = data.amount;
                this.goodsCount = data.countGoods;
                this.goods = [...data.contents];
                this.render();
            });

    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new CartItem(product);
            this.allItems.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
        document.querySelector("#total-price").innerHTML = this.goodsAmount + " \u20bd";
        document.querySelector(this.containerCount).innerHTML = this.goodsCount;

    }


    _getCart() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log('Error:', error);
            });
    }
}

const list = new ProductList();
const cart = new Cart();

