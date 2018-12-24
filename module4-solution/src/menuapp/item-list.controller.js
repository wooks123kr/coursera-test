(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['$stateParams', 'MenuService', 'items'];
function MenuItemsController($stateParams, MenuService, items) {
  var itemList = this;
  itemList.category = $stateParams.categoryName;
  itemList.items = items;
}

})();
