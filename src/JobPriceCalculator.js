if (typeof NuPack == 'undefined')
  NuPack = {};
if (typeof NuPack.Pricing == 'undefined')
    NuPack.Pricing = {};

(function(){
  var categories = {};
  var basePrice = 0;
  var numberOfPeople = 0;
  var category = 'other';

  this.JobPriceCalculator = function()
  {
    categories.food = 0.13;
    categories.electronics = 0.02;
    categories.drugs = 0.075;
  };

  this.JobPriceCalculator.prototype.getEstimatedPrice = function(input)
  {
    parseInput(input);

    var flatMarkup = this.calculateFlatMarkup(basePrice);
    var jobMarkup = this.calculateJobMarkup(basePrice + flatMarkup, numberOfPeople);
    var categoryMarkup = this.calculateCategoryMarkup(basePrice + flatMarkup, category);

    return Math.round((basePrice + flatMarkup + jobMarkup + categoryMarkup) * 100) / 100;
  };

  function parseInput(input)
  {
    var data = input.split(',');
    basePrice = Number(data[0].trim());
    numberOfPeople = Number(data[1].trim().split(' ')[0]);
    category = data[2].trim();
  };

  this.JobPriceCalculator.prototype.calculateFlatMarkup = function (price)
  {
    return price * 0.05;
  };

  this.JobPriceCalculator.prototype.calculateJobMarkup = function (price, numberOfPeople)
  {
    return price * numberOfPeople * 0.012;
  };

  this.JobPriceCalculator.prototype.calculateCategoryMarkup = function (price, category)
  {
    var categoryMarkup = 0;
    for (var item in categories) {
      if (category === item)
        categoryMarkup = price * categories[item];
    };

    return categoryMarkup;
  };

}).call(NuPack.Pricing);
