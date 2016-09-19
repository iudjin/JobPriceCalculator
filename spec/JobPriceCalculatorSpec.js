describe("JobPriceCalculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new JobPriceCalculator();
  });

  it("should return 1591.58 for 1,299.99, 3 people, food", function() {
    expect(calculator.getEstimatedPrice('1299.99, 3 people, food')).toEqual(1591.58);
  });

  it("should return 6199.81 for 5432.00, 1 person, drugs", function() {
    expect(calculator.getEstimatedPrice('5432.00, 1 person, drugs')).toEqual(6199.81);
  });

  it("should return 13707.63 for 12456.95, 4 people, books", function() {
    expect(calculator.getEstimatedPrice('12456.95, 4 people, books')).toEqual(13707.63);
  });
});
