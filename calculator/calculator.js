// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValuesUI = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValuesUI));
}

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById('loan-amount');
  const loanYears = document.getElementById('loan-years');
  const loanRate = document.getElementById('loan-rate');
  const defaultValues = {
    amount: 12500,
    years: 5,
    rate: 2.5
  }
  loanAmount.value = defaultValues.amount;
  loanYears.value = defaultValues.years;
  loanRate.value = defaultValues.rate;
  update();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const iRate = (values.rate / 100) / 12;
  const n = values.years * 12;
  const principle = values.amount;
  const monthlyPayment = ((principle * iRate)/ (1 - ((1 + iRate)**-n))).toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = `$${monthly}`;
}


window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});