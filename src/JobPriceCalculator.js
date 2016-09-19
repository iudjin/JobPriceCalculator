function JobPriceCalculator() {
  this.categories = {};
  this.categories.food = 0.13;
  this.categories.electronics = 0.02;
  this.categories.drugs = 0.075;
};

JobPriceCalculator.prototype.getEstimatedPrice = function(input) {
  var data = input.split(',');
  var basePrice = Number(data[0].trim());
  var numberOfPeople = Number(data[1].trim().split(' ')[0]);
  var category = data[2].trim();

  var flatMarkup = basePrice * 0.05;
  var jobMarkup = (basePrice + flatMarkup) * numberOfPeople * 0.012;

  var categoryMarkup = 0;
  for (var item in this.categories) {
    if (category === item)
      categoryMarkup = (basePrice + flatMarkup) * this.categories[item];
  }
  return Math.round((basePrice + flatMarkup + jobMarkup + categoryMarkup) * 100) / 100;
};
