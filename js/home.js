const addCostButton = document.getElementById('addcost-button');
const currentAmount = document.getElementById('current-amount');
const costAmount = document.getElementById('cost-amount');
const costDesc = document.getElementById('cost-desc');
const todayCost = document.getElementById('today-cost');
const thisMonthCost = document.getElementById('this-month-cost');
const averageCost = document.getElementById('average-cost');



addCostButton.addEventListener('click', function(e){
    e.preventDefault();

    // convert string to numbers
    const currentAmountN = parseFloat(currentAmount.innerText);
    const costAmountN = parseFloat(costAmount.value);
    const todayCostN = parseFloat(todayCost.innerText);
    const thisMonthCostN = parseFloat(thisMonthCost.innerText);
    const averageCostN = parseFloat(averageCost.innerText);

    const updatedBalance = currentAmountN-costAmountN;
    const updatedTodayCost = todayCostN+costAmountN;
    const updatedThisMonthCost = thisMonthCostN + costAmountN;
    const updatedAverageCost = averageCostN + costAmountN;

    // update the money
    currentAmount.innerText = updatedBalance;
    todayCost.innerText = updatedTodayCost;
    thisMonthCost.innerText = updatedThisMonthCost;
    averageCost.innerText = updatedAverageCost;

    

    // create today cost item
    let todayCostItem = document.getElementById('today-cost-list');
    let todayCostItemCreate = todayCostItem.lastElementChild.cloneNode(true);
    todayCostItemCreate.innerHTML = `<h1 class="font-bold text-xl text-black"> <span>${costAmountN}</span>৳ </h1>
    <p class="text-sm text-gray-700"> ${costDesc.value} </p>` ;
    todayCostItem.appendChild(todayCostItemCreate);


    // create today cost item
    let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    

    // create today cost item
    let entireCostItem = document.getElementById('entire-cost-list');
    let entireCostItemCreate = entireCostItem.lastElementChild.cloneNode(true);
    entireCostItemCreate.innerHTML = `<th class="text-error"> ${costAmountN} </th>
                <td> ${costAmountN} </td>
                <td> ${costDesc.value} </td>
                <td> ${date} </td>` ;
    entireCostItem.appendChild(entireCostItemCreate);


    costAmount.value = '';
    costDesc.value = '';
});