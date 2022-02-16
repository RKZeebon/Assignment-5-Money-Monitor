/* ------------------------------
Error handling reusable functions 
  ------------------------------*/

function expensesErrorHandling(item, gotError) {
    if (gotError) {
        document.getElementById(item).style.border = '4px solid red';
        document.getElementById(item + '-error').style.display = 'block';
    }
    else {
        document.getElementById(item).style.border = '1px solid gray';
        document.getElementById(item + '-error').style.display = 'none';
    }
}


function incomeAndExpensesErrorHandling(item, gotError) {
    if (gotError) {
        document.getElementById(item).style.border = '4px solid red';
    }
    else {
        document.getElementById(item).style.border = '1px solid gray';
    }
}

/* ----------------------------------
Total Expenses calculating function 
  ---------------------------------*/
function totalExpense() {
    let foodCost = document.getElementById('food-cost');
    let rent = document.getElementById('rent-cost');
    let clothesCost = document.getElementById('clothes-cost');

    let totalExpenses = document.getElementById('total-expenses');

    if (foodCost.value < 0 || foodCost.value == '') {
        expensesErrorHandling('food-cost', true);
    }

    else if (rent.value < 0 || rent.value == '') {
        expensesErrorHandling('rent-cost', true);
        expensesErrorHandling('food-cost');
    }

    else if (clothesCost.value < 0 || clothesCost.value == '') {
        expensesErrorHandling('clothes-cost', true);
        expensesErrorHandling('rent-cost');
    }

    else if (parseFloat(foodCost.value) >= 0 && parseFloat(rent.value) >= 0 && parseFloat(clothesCost.value) >= 0) {
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
    let totalExpenses = document.getElementById('total-expenses');

    let balance = document.getElementById('balance');

    if (income.value < 0 || income.value == '') {
        expensesErrorHandling('income', true);

        document.getElementById('income-error2').style.display = 'none';

        balance.innerText = '000';

    }
    else if (parseFloat(income.value) < parseFloat(totalExpenses.innerText)) {
        document.getElementById('income').style.border = '4px solid red';

        document.getElementById('income-error2').style.display = 'block';
        document.getElementById('income-error').style.display = 'none';

        incomeAndExpensesErrorHandling('food-cost', true);
        incomeAndExpensesErrorHandling('rent-cost', true);
        incomeAndExpensesErrorHandling('clothes-cost', true);

        balance.innerText = '000';
    }

    else {
        balance.innerText = parseFloat(income.value) - parseFloat(totalExpenses.innerText);

        expensesErrorHandling('income');

        incomeAndExpensesErrorHandling('food-cost');
        incomeAndExpensesErrorHandling('rent-cost');
        incomeAndExpensesErrorHandling('clothes-cost');

        document.getElementById('income-error2').style.display = 'none';

    }
}

/* --------------------------------
Saving Amount Calculating Function
 --------------------------------*/

function savingAmountCalculation() {
    let savingPercentage = document.getElementById('saving-percentage');
    let income = document.getElementById('income');
    let savingAmount = document.getElementById('saving-amount');

    savingAmount.innerText = parseFloat(income.value) * parseFloat(savingPercentage.value) / 100;
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