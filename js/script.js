/* ---------------------------------------------
Calculating total expenses with error handling
 ---------------------------------------------*/
function totalExpense() {
    let foodCost = document.getElementById('food-cost');
    let rent = document.getElementById('rent');
    let clothesCost = document.getElementById('clothes-cost');

    let totalExpenses = document.getElementById('total-expenses');

    if (foodCost.value < 0 || foodCost.value == '') {
        document.getElementById('food-cost').style.border = '4px solid red';
        document.getElementById('food-cost-error').style.display = 'block';

    }
    else if (rent.value < 0 || rent.value == '') {
        document.getElementById('rent').style.border = '4px solid red';
        document.getElementById('rent-error').style.display = 'block';

        document.getElementById('food-cost').style.border = '1px solid gray';
        document.getElementById('food-cost-error').style.display = 'none';

    }
    else if (clothesCost.value < 0 || clothesCost.value == '') {
        document.getElementById('clothes-cost').style.border = '4px solid red';
        document.getElementById('clothes-cost-error').style.display = 'block';

        document.getElementById('rent').style.border = '1px solid gray';
        document.getElementById('rent-error').style.display = 'none';
    }

    else if (parseFloat(foodCost.value) >= 0 && parseFloat(rent.value) >= 0 && parseFloat(clothesCost.value) >= 0) {
        let totalCost = parseFloat(foodCost.value) + parseFloat(rent.value) + parseFloat(clothesCost.value);

        document.getElementById('food-cost').style.border = '1px solid gray';
        document.getElementById('food-cost-error').style.display = 'none';

        document.getElementById('rent').style.border = '1px solid gray';
        document.getElementById('rent-error').style.display = 'none';

        document.getElementById('clothes-cost').style.border = '1px solid gray';
        document.getElementById('clothes-cost-error').style.display = 'none';

        totalExpenses.innerText = totalCost;

    }

}

/* ---------------------------------------------
Calculating Balance with error handling
 ---------------------------------------------*/

function checkingBalance() {
    let income = document.getElementById('income');
    let totalExpenses = document.getElementById('total-expenses');

    let balance = document.getElementById('balance');

    if (income.value < 0 || income.value == '') {
        document.getElementById('income').style.border = '4px solid red';
        document.getElementById('income-error').style.display = 'block';

        document.getElementById('income-error2').style.display = 'none';

    }
    else if (parseFloat(income.value) < parseFloat(totalExpenses.innerText)) {
        document.getElementById('income').style.border = '4px solid red';
        document.getElementById('income-error2').style.display = 'block';

        document.getElementById('income-error').style.display = 'none';
    }

    else {
        balance.innerText = parseFloat(income.value) - parseFloat(totalExpenses.innerText);
        document.getElementById('income').style.border = '1px solid gray';

        document.getElementById('income-error2').style.display = 'none';
        document.getElementById('income-error').style.display = 'none';

    }
}

/* -----------------------
Calculating savingAmount
 -------------------------*/

function savingAmountCalculation() {
    let savingPercentage = document.getElementById('saving-percentage');
    let income = document.getElementById('income');
    let savingAmount = document.getElementById('saving-amount');

    savingAmount.innerText = parseFloat(income.value) * parseFloat(savingPercentage.value) / 100;
}


/* -------------------------------------------------
Calculating remaining Balance with error handling
 --------------------------------------------------*/

function remainingBalanceCalculation() {
    let balance = document.getElementById('balance');
    let savingAmount = document.getElementById('saving-amount');
    let remainingBalance = document.getElementById('remaining-balance');
    if (parseFloat(balance.innerText) <= parseFloat(savingAmount.innerText)) {
        document.getElementById('saving-percentage').style.border = '4px solid red';
        document.getElementById('saving-error').style.display = 'block';
        remainingBalance.innerText = '000';
    }
    else {
        remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
        document.getElementById('saving-percentage').style.border = '1px solid gray';
        document.getElementById('saving-error').style.display = 'none';
    }

}

/*-------------------
added eventlistener
-------------------*/

document.getElementById('calculate-btn').addEventListener('click', function () {
    totalExpense();
    checkingBalance();
})

document.getElementById('saving').addEventListener('click', function () {
    savingAmountCalculation();
    remainingBalanceCalculation();
})