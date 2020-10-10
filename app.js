// query selectors for inputs
const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");

// query selectors for btns
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");

// query selectors for expenses list
const listExpenses = document.querySelector("#expenses-list");

// total expenses element
const totalExpensesEl = document.querySelector("#total-expenses");

let totalExpenses = 0;

// when confirm button clicked by user
confirmBtn.addEventListener('click', () => {
  const entredReason = reasonInput.value;
  const entredAmount = amountInput.value;

  if (entredReason.trim().length <=0 || entredAmount <= 0 || entredAmount.trim().length <= 0) {
    presentAlert();
    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.textContent = entredReason + ' : $' + entredAmount;
  listExpenses.appendChild(newItem);


  // for total expenses
  totalExpenses += +entredAmount; 
  totalExpensesEl.textContent = totalExpenses;

  // reset fields
  clear();
});

// clear method to reset fields
function clear() {
  reasonInput.value = '';
  amountInput.value = '';
}

// when cancel button clicked by user
cancelBtn.addEventListener('click', clear);


function presentAlert() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Alert';
  alert.message = 'Please enter valid reason and amount';
  alert.buttons = ['Okay'];

  document.body.appendChild(alert);
  return alert.present();
}
