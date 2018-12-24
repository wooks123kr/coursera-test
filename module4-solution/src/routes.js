(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories list page
  .state('menuCategories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menu-categories.template.html',
    controller: 'MenuCategoriesController as categoryList',
    resolve: {
      categories: ['MenuService', function (MenuService) {
        return MenuService.getCategories();
      }]
    }
  })

  // Item list
  .state('menuItems', {
    url: '/items/{categoryName}',
    templateUrl: 'src/menuapp/templates/item-list.template.html',
    controller: 'MenuItemsController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
        return MenuService.getItems($stateParams.categoryName);
      }]
    }
  })

  // item detail	
  .state('menuItems.itemDetail', {
    //url: '/items/{itemId}',
	  templateUrl: 'src/menuapp/templates/item-detail.template.html',
	  controller: 'ItemDetailController as itemDetail',
	  params: {
		  itemId: null
	  }
  });

}

})();
