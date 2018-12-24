(function () {
'use strict';

angular.module('MenuApp')
.service('MenuService', MenuService);


MenuService.$inject = ['$q', '$timeout']
function MenuService($q, $timeout) {
  var service = this;

  // List of categories
  var categories = [];
	// List of Items;
  var items = [];

  // Pre-populate a no cookie list
  categories.push({
    name: "Appetizer",
  });
  categories.push({
    name: "Main",
  });
  categories.push({
    name: "Dessert",
  });

  items.push({
    name: "Chicken Salad",
    price: 19000,
    category: 'Appetizer',
    description : "Good quality"
  });
  items.push({
    name: "Yogurt Salad",
    price: 19000,
    category: 'Appetizer',
    description : "Good quality"
  });
  items.push({
    name: "TBone Steak",
    price: 40000,
    category: 'Main',
    description : "Good quality"
  });
  items.push({
    name: "SeolonTang",
    price: 10000,
    category: 'Main',
    description : "Good quality"
  });
  items.push({
    name: "Apple Pie",
    category: 'Dessert',
    price: 9000,
    description : "Good quality"
  });
  items.push({
    name: "Icecream",
    category: 'Dessert',
    price: 9000,
    description : "Cool"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getCategories = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(categories);
    }, 800);

    return deferred.promise;
  };

  service.getItems = function (categoryCode) {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      var filtered = [];
      items.forEach(function (item, index){
	      if ( item.category === categoryCode) {
		      filtered.push(item);
	      }
      });
      deferred.resolve(filtered);
    }, 800);

    return deferred.promise;
  };
}

})();
