function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function toggleSubscription(type) {
    var card = document.querySelector('.subscription-card');
    var price = card.querySelector('.price');
    var buttonAnual = card.querySelector('.anual-button');
    var buttonMensual = card.querySelector('.mensual-button');

    if (type === 'Anual') {
        price.innerHTML = '<h2>Anual</h2> <p>$20.750COP/mes</p> <p>Cobro anual de $249.000 COP</p>';
        buttonAnual.classList.add('active');
        buttonMensual.classList.remove('active');
    } else {
        price.innerHTML = '<h2>Mensual</h2><p>$39.000 COP/mes</p> <br>';
        buttonAnual.classList.remove('active');
        buttonMensual.classList.add('active');
    }
}
