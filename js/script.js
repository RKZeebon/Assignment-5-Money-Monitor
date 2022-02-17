/* ------------------------------
Error handling reusable function
  ------------------------------*/

function expensesErrorHandling(item, gotError) {
    if (gotError) {
        document.getElementById(item).style.border = '2px solid red';
        document.getElementById(item + '-error').style.display = 'block';
    }
    else {
        document.getElementById(item).style.border = '1px solid gray';
        document.getElementById(item + '-error').style.display = 'none';
    }
}

/* ----------------------------------
Total Expenses calculating function 
  ---------------------------------*/
function totalExpense() {
    let foodCost = document.getElementById('food-cost');
    let foodCostAmont = parseFloat(foodCost.value);

    let rent = document.getElementById('rent-cost');
    let rentAmount = parseFloat(rent.value);

    let clothesCost = document.getElementById('clothes-cost');
    let clothesCostAmount = parseFloat(clothesCost.value);

    let totalExpenses = document.getElementById('total-expenses');

    if (foodCostAmont < 0 || isNaN(foodCostAmont)) {
        expensesErrorHandling('food-cost', true);
    }

    else if (rentAmount < 0 || isNaN(rentAmount)) {
        expensesErrorHandling('rent-cost', true);
        expensesErrorHandling('food-cost');
    }

    else if (clothesCostAmount < 0 || isNaN(clothesCostAmount)) {
        expensesErrorHandling('clothes-cost', true);
        expensesErrorHandling('rent-cost');
    }

    else {
        let totalCost = parseFloat(foodCost.value) + parseFloat(rent.value) + parseFloat(clothesCost.value);

        expensesErrorHandling('food-cost');
        expensesErrorHandling('rent-cost');
        expensesErrorHandling('clothes-cost');

        totalExpenses.innerText = totalCost;

    }

}

/* --------------------------
Balance Calculating Function
 ---------------------------*/

function checkingBalance() {
    let income = document.getElementById('income');
    let incomeAmount = parseFloat(income.value);

    let totalExpenses = document.getElementById('total-expenses');
    let totalExpensesAmount = parseFloat(totalExpenses.innerText);

    let balance = document.getElementById('balance');

    if (incomeAmount < 0 || isNaN(incomeAmount)) {
        expensesErrorHandling('income', true);

        document.getElementById('income-error2').style.display = 'none';

        balance.innerText = '000';

    }
    else if (incomeAmount < totalExpensesAmount) {
        document.getElementById('income').style.border = '2px solid red';

        document.getElementById('income-error2').style.display = 'block';
        document.getElementById('income-error').style.display = 'none';

        balance.innerText = '000';
    }

    else {
        balance.innerText = parseFloat(income.value) - parseFloat(totalExpenses.innerText);

        expensesErrorHandling('income');

        document.getElementById('income-error2').style.display = 'none';

    }
}

/* --------------------------------
Saving Amount Calculating Function
 --------------------------------*/

function savingAmountCalculation() {
    let savingPercentage = document.getElementById('saving-percentage');
    let savingPercent = parseFloat(savingPercentage.value);

    let income = document.getElementById('income');
    let incomeAmount = parseFloat(income.value)

    let savingAmount = document.getElementById('saving-amount');

    if (isNaN(savingPercent) || isNaN(incomeAmount)) {
        document.getElementById('saving-error2').style.display = 'block';
    }
    else {
        savingAmount.innerText = incomeAmount * savingPercent / 100;
        document.getElementById('saving-error2').style.display = 'block';
    }
}


/* -------------------------------------
Remaining Balance Calculating Function
 -------------------------------------*/

function remainingBalanceCalculation() {
    let balance = document.getElementById('balance');
    let savingAmount = document.getElementById('saving-amount');

    let remainingBalance = document.getElementById('remaining-balance');

    if (parseFloat(balance.innerText) == 0) {
        document.getElementById('saving-error2').style.display = 'block';
    }
    else if (parseFloat(balance.innerText) <= parseFloat(savingAmount.innerText)) {
        expensesErrorHandling('saving-percentage', true);

        remainingBalance.innerText = '000';
    }
    else {
        remainingBalance.innerText = parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
        expensesErrorHandling('saving-percentage');

        document.getElementById('saving-error2').style.display = 'none';
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