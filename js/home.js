const addCostButton = document.getElementById('addcost-button');
const currentAmount = document.getElementById('current-amount');
const costAmount = document.getElementById('cost-amount');
const costDesc = document.getElementById('cost-desc');
const todayCost = document.getElementById('today-cost');



addCostButton.addEventListener('click', function(e){
    e.preventDefault();

    // convert string to numbers
    const currentAmountN = parseFloat(currentAmount.innerText);
    const costAmountN = parseFloat(costAmount.value);
    const todayCostN = parseFloat(todayCost.innerText);

    const updatedBalance = currentAmountN-costAmountN;
    const updatedTodayCost = todayCostN+costAmountN;
    
    // update the money
    currentAmount.innerText = updatedBalance;
    todayCost.innerText = updatedTodayCost;

    costAmount.value = '';
    costDesc.value = '';
    
});