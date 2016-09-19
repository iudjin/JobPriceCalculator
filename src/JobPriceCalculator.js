if (typeof NuPack == 'undefined')
  NuPack = {};
if (typeof NuPack.Pricing == 'undefined')
    NuPack.Pricing = {};

(function(){
  var categories = {};

  this.JobPriceCalculator = function()
  {
    categories.food = 0.13;
    categories.electronics = 0.02;
    categories.drugs = 0.075;
  };

  this.JobPriceCalculator.prototype.getEstimatedPrice = function(input)
  {
    var data = input.split(',');
    var basePrice = Number(data[0].trim());
    var numberOfPeople = Number(data[1].trim().split(' ')[0]);
    var category = data[2].trim();

    var flatMarkup = basePrice * 0.05;
    var jobMarkup = (basePrice + flatMarkup) * numberOfPeople * 0.012;

    var categoryMarkup = 0;
    for (var item in categories) {
      if (category === item)
        categoryMarkup = (basePrice + flatMarkup) * categories[item];
    }
    return Math.round((basePrice + flatMarkup + jobMarkup + categoryMarkup) * 100) / 100;
  };
}).call(NuPack.Pricing);
