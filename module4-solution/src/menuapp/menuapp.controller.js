(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);


MenuCategoriesController.$inject = ['MenuService', 'categories'];
function MenuCategoriesController(MenuService, categories) {
  var categoryList = this;
  categoryList.categories = categories;
}

})();
