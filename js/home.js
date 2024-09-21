const addCostButton = document.getElementById('addcost-button');
const currentAmount = document.getElementById('current-amount');
let costAmount = document.getElementById('cost-amount');
const costDesc = document.getElementById('cost-desc');


addCostButton.addEventListener('click', function(e){
    e.preventDefault();
    
    console.log(costAmount.value);
    

});