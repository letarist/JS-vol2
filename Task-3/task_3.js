document.getElementById('but').onclick = render;
function totalBurger() {
    let item = document.querySelectorAll('.menu');
    let price = 0;
    let calories = 0;
    // console.log(item)
    for (i = 0; i < item.length; i++) {
        console.log(item[i])
        if (item[i].checked) {
            price += parseInt(item[i].getAttribute('data-price'));
            calories += parseInt(item[i].getAttribute('data-calories'));

        }

    }
    return [price, calories]
}

function render() {
    let item = totalBurger();
    document.getElementById('total-price').innerHTML = `Ваша покупка составляет ${item[0]} рублей`
    document.getElementById('result-calories').innerHTML = `Калорийность продуктов составляет ${item[1]} калорий`

}
