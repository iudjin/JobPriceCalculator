function JobPriceCalculator() {
};

JobPriceCalculator.prototype.getEstimatedPrice = function(input) {
  var data = input.split(',');
  var basePrice = Number(data[0].trim());
  var numberOfPeople = Number(data[1].trim().split(' ')[0]);

  var flatMarkup = basePrice * 0.05;
  var jobMarkup = (basePrice + flatMarkup) * numberOfPeople * 0.012;

  return Math.round((basePrice + flatMarkup + jobMarkup) * 100) / 100;
};
