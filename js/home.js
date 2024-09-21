const addCostButton = document.getElementById('addcost-button');
const currentAmount = document.getElementById('current-amount');
let costAmount = document.getElementById('cost-amount');
const costDesc = document.getElementById('cost-desc');




addCostButton.addEventListener('click', function(e){
    e.preventDefault();

    // convert string to numbers
    const currentAmountN = parseFloat(currentAmount.innerText);
    const costAmountN = parseFloat(costAmount.value);
    const updatedBalance = currentAmountN-costAmountN;
    
    // update the money
    currentAmount.innerText = updatedBalance;
    costAmount.value = '';
    costDesc.value = '';
    
});