
it('should calculate the monthly rate correctly', function () {
  const loan = {
    amount: 10000,
    years: 4,
    rate: 3
  };
  expect(calculateMonthlyPayment(loan)).toEqual('221.34');
});


it("should return a result with 2 decimal places", function() {
  const loan = {
    amount: 11430,
    years: 4,
    rate: 3
  };
  expect(calculateMonthlyPayment(loan)).toEqual('253.00');
});

/// etc
