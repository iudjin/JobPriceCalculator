describe("JobPriceCalculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new JobPriceCalculator();
  });

  it("should return base price + flat markup", function() {
    expect(calculator.getEstimatedPrice('100')).toEqual(105);
  });
});
