function JobPriceCalculator() {
};

JobPriceCalculator.prototype.getEstimatedPrice = function(input) {
  return Number(input) * 1.05;
};
