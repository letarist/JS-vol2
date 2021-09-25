let mainItem = JSON.parse(localStorage.getItem('mainObject'));
function f() {
    if (mainItem) {
        let sp = document.querySelector('.empty-basket');
        let message = document.createElement('div');
        message.classList = 'empty-basket-one';
        message.textContent = 'Ваша корзина';
        sp.appendChild(message);
        let totalPrice = document.createElement('div');
        totalPrice.classList = 'empty-basket-one';

        let summ = 0;
        for (i of mainItem) {


            for (k in i) {
                var item = document.createElement('div');
                item.classList = 'author';
                item.textContent = `${i['author']} - 
                ${i['titleBook']} 
                ${i['price']} Р.`;

            }
            summ += i['price']
            sp.appendChild(item)
            sp.appendChild(totalPrice)
        }
        totalPrice.textContent = `Общая стоимость покупки = ${summ} Р.`
        let button = document.createElement('a');
        button.href = '#';
        button.textContent = 'Купить';
        button.classList = 'empty-basket-button';
        sp.appendChild(button);

    } else {
        let sp = document.querySelector('.empty-basket');
        let messageIsNotObject = document.createElement('div');
        messageIsNotObject.classList = 'empty-basket-one';
        messageIsNotObject.textContent = 'Ваша корзина пуста!';
        sp.appendChild(messageIsNotObject);
    }
}
window.onload = f();
