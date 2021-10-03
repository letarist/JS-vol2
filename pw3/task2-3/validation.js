function f() {
    let name = document.getElementsByName('1')[0].value,
        phone = document.getElementsByName('2')[0].value,
        email = document.getElementsByName('3')[0].value;

    let regName = /^[a-zA-Zа-яА-Я]+$/,
        regPhone = /^\+\d{1,3}\(\d{3}\)\-\d{3}\-\d{2}\-\d{2}$/,
        regEmail = /^[a-z_$0-9]+@[a-z]{3,7}\.[a-z]{2,7}/

    if (regName.test(name) == true) {
        document.getElementById('1').className = 'don_elem';
    } else {
        document.getElementById('1').className = 'out_elem';
    }
    if (regPhone.test(phone) == true) {
        document.getElementById('2').className = 'don_elem';
    } else {
        document.getElementById('2').className = 'out_elem';
    }
    if (regEmail.test(email) == true) {
        document.getElementById('3').className = 'don_elem';
    } else {
        document.getElementById('3').className = 'out_elem';
    }
}
document.querySelector('button').onclick = f;