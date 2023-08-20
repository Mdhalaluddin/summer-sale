console.log('summer asce')
// function setInputValue (fieldId){
//     const element = document.getElementById(fieldId);
//     const text = parseFloat(element);
//     const total = 

// }
document.getElementById('hlw').addEventListener('click', function(){
    const cardAmountAdd = document.getElementById('tkAdd')
    const cardAmountAddString = cardAmountAdd.innerText;
    const cardAmount = parseFloat(cardAmountAddString);
    // console.log(cardAmount);

    const addedTotalPrice = document.getElementById('avarageTotalPrice');
    const addedPriceTotal = addedTotalPrice.innerText;
    const addPrice = parseFloat(addedPriceTotal);
     
    const total = cardAmount + addPrice;
    addedPriceTotal.innerText = total;
})