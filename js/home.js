const addCostButton = document.getElementById('addcost-button');
const currentAmount = document.getElementById('current-amount');
const currentDeposite = document.getElementById('current-deposite');
const costAmount = document.getElementById('cost-amount');
const costDesc = document.getElementById('cost-desc');
const todayCost = document.getElementById('today-cost');
const thisMonthCost = document.getElementById('this-month-cost');
const averageCost = document.getElementById('average-cost');
const thisMonthEarn = document.getElementById('this-month-earn');
const depositeButton = document.getElementById('deposite-button');

const depositeAmount = document.getElementById('deposite-amount');
const depositeDesc = document.getElementById('deposite-desc');

let count = 1;

const depositeSection = document.getElementById('deposite-section');
const addDepositeButton = document.getElementById('adddeposite-button');


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
    
    const div = document.createElement('div');
    div.classList.add('item', 'text-center', 'py-2', 'items-center', 'rounded-md', 'bg-yellow-200');

    const h1 = document.createElement('h1');
    h1.classList.add('font-bold', 'text-xl', 'text-black');
    h1.innerText = costAmountN+'৳';
    div.appendChild(h1);

    const p = document.createElement('p');
    p.classList.add('text-sm', 'text-gray-700');
    p.innerText = costDesc.value;
    div.appendChild(p);

    todayCostItem.appendChild(div);



     // create today cost item
     let entireCostItem = document.getElementById('entire-cost-list');
    
     const tr = document.createElement('tr');
 
    

     const th = document.createElement('th');
     th.innerText = count++;
     th.classList.add('text-error');
     tr.appendChild(th);
 
     const td1 = document.createElement('td');
     td1.innerText = costAmountN;
     tr.appendChild(td1);
 
     const td2 = document.createElement('td');
     td2.innerText = costDesc.value;
     tr.appendChild(td2);
 
     const td3 = document.createElement('td');
     td3.innerText = new Date().toJSON().slice(0,10).replace(/-/g,'/');
     tr.appendChild(td3);

     entireCostItem.appendChild(tr);


    costAmount.value = '';
    costDesc.value = '';
});


depositeButton.addEventListener('click', function(e){
    e.preventDefault();
    depositeSection.classList.toggle('hidden');
});

addDepositeButton.addEventListener('click', function(e){
    e.preventDefault();
    const depositeAmountN = parseFloat(depositeAmount.value);
    currentDeposite.innerText = depositeAmountN;

    thisMonthEarn.innerText = depositeAmountN;
    currentAmount.innerText = depositeAmountN;

    depositeAmount = '';
});

addDepositeButton.addEventListener('click', function(){
    depositeSection.classList.toggle('hidden');
})
