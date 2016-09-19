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

    var flatMarkup = calculateFlatMarkup(basePrice);
    var jobMarkup = calculateJobMarkup(basePrice + flatMarkup);
    var categoryMarkup = calculateCategoryMarkup(basePrice + flatMarkup);

    return Math.round((basePrice + flatMarkup + jobMarkup + categoryMarkup) * 100) / 100;
  };

  function parseInput(input)
  {
    var data = input.split(',');
    basePrice = Number(data[0].trim());
    numberOfPeople = Number(data[1].trim().split(' ')[0]);
    category = data[2].trim();
  };

  function calculateFlatMarkup(price)
  {
    return price * 0.05;
  };

  function calculateJobMarkup(price)
  {
    return price * numberOfPeople * 0.012;
  };

  function calculateCategoryMarkup(price)
  {
    var categoryMarkup = 0;
    for (var item in categories) {
      if (category === item)
        categoryMarkup = price * categories[item];
    };

    return categoryMarkup;
  };

}).call(NuPack.Pricing);
