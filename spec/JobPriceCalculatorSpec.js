describe("JobPriceCalculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new JobPriceCalculator();
  });

  it("should return base price + flat markup + job markup", function() {
    expect(calculator.getEstimatedPrice('100, 1 person')).toEqual(106.26);
  });
});
