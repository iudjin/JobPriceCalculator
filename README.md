NuPack.Pricing
==========================

Implementation of pricing estimation for NuPack
----------------------------------------------

	Folder /src contains the code for calculating estimated price for NuPack corporation	

Usage
------

	var calculator = new NuPack.Pricing.JobPriceCalculator();
	calculator.getEstimatedPrice('1299.99, 3 people, food');

	where
	 - first parameter is the base price
	 - second parameter is the number of people who will do the job
	 - third parameter is the category the products fall into

 
Running specification tests
-------------
	
	Open SpecRunner.html file located in root folder in any browser which will execute specifications 
		in Jasmine format located under /spec folder