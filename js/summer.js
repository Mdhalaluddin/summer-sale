let total = 0;

function clickCard(target) {
    const ul = document.getElementById('select-item');
    const itemTextShow = target.childNodes[5].innerText;
    const li = document.createElement('li')
    li.innerText = itemTextShow;
    ul.appendChild(li)

    const price = target.childNodes[7].childNodes[1].innerText;
    total = parseInt(total) + parseInt(price);
    document.getElementById('average-total-price').innerText = total;
    const button = document.getElementById('btn-apply');
    if (total > 200) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }

}
function addTextProductName() {
    console.log('added product')
}

function discountBtn() {

    const discountInput = document.getElementById('input-discount');
    const discountInputField = discountInput.value;
    console.log(discountInputField);

    const discountPrice = document.getElementById('discount-field')
    const discountAmount = discountPrice.innerText;
    const discountAmountField = parseFloat(discountAmount);

    if (discountInputField === "SELL200" && total > 200) {
        const discountAmountField = total * 0.2;
        total -= discountAmountField;
        discountPrice.innerText = discountAmountField.toFixed(2);

    }
    else {
        console.log('invalid')
    }
    totalAvg = total - discountAmount;
    document.getElementById('avg-total').innerText = totalAvg;
    const btnDisable = document.getElementById('btn-disable')
    if (totalAvg > 0) {
        btnDisable.disabled = false;
    }
    else {
        btnDisable.disabled = true;
    }

}
function goToHome() {
    document.getElementById('clear-all').reset();
}


