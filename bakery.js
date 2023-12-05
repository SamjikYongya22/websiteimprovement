document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;


    let confirmationMessage;
    if (itemName !== '' && quantity > 0) {
        let totalCost = quantity + 5; 
        confirmationMessage = `Thank you for ordering ${quantity} ${itemName}(s). Total cost: $${totalCost}`;
    } else {
        confirmationMessage = 'Please enter a valid item name and quantity.';
    }

    document.getElementById('orderConfirmation').innerText = confirmationMessage;
});

/*Fixing quantity bottom so thaT it doesnot show negative number */
document.getElementById('quantity').addEventListener('input',function(event){
    const Inputquntity = event.target;
    let quantity = parseInt(Inputquntity.value,10);

    quantity= (Number.isInteger(quantity) && quantity >= 0) ? quantity : 0;

    Inputquntity.value = quantity
})
