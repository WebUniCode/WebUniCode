document.getElementById('card-number').addEventListener('input', function() {
    var cardNumber = this.value.replace(/\D/g, '');
    var cardType = detectCardType(cardNumber);
    updateCardIcon(cardType);
});

function detectCardType(cardNumber) {
    if (/^4/.test(cardNumber)) {
        return 'visa';
    } else if (/^5[1-5]/.test(cardNumber)) {
        return 'mastercard';
    } else if (/^3[47]/.test(cardNumber)) {
        return 'amex';
    } else if (/^6(?:011|5)/.test(cardNumber)) {
        return 'discover';
    } else {
        return 'unknown';
    }
}

function updateCardIcon(cardType) {
    var cardTypeElement = document.getElementById('card-type');
    var iconUrl = '';

    switch (cardType) {
        case 'visa':
            iconUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/320px-Visa_Inc._logo.svg.png';
            break;
        case 'mastercard':
            iconUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/320px-MasterCard_Logo.svg.png';
            break;
        case 'amex':
            iconUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/320px-American_Express_logo.svg.png';
            break;
        case 'discover':
            iconUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Discover_Card_logo.svg/320px-Discover_Card_logo.svg.png';
            break;
        default:
            iconUrl = '';
            break;
    }

    if (iconUrl) {
        cardTypeElement.innerHTML = '<img class="card-icon" src="' + iconUrl + '" alt="' + cardType + '">';
    } else {
        cardTypeElement.innerHTML = '';
    }
}
