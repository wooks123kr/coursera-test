(function(){
'use strict';
angular.module('NarrowItDownApp', [] )
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
    var menu = this;
    menu.found = [];
    menu.removeItem = function(index){
        console.log("ctrol remove Item: " + index);
        MenuSearchService.removeItem(index);  
    }
    //MenuSearchService.getMatchedMenuItems().then(function(items){
    //    menu.found = items;
    //    console.log(menu.found);
    //});
    menu.search = function(searchTerm){
        MenuSearchService.getMatchedMenuItems(searchTerm).then(function(items){
            menu.found = items;
        });
    }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
    var service = this;
    var foundItems = [];
    service.getMatchedMenuItems = function(searchTerm){
        foundItems.splice(0, foundItems.length);
        return $http.get(ApiBasePath+'/menu_items.json').then(function (result){
            if (!searchTerm || searchTerm.length == 0){
                return [];
            }
            for (var i = 0 ;  i < result.data.menu_items.length; i++){
                var item = result.data.menu_items[i];
                if (item.description && item.description.search(searchTerm) > 0){
                    foundItems.push(item);
                }
            }
            return foundItems;
        });
    }
    service.removeItem = function(index){
        foundItems.splice(index,1);
    }
}

function FoundItemsDirectiveController(){
    var menuList = this;
}

function FoundItemsDirective(){
    var ddo = {
        controller: FoundItemsDirectiveController,
        controllerAs: 'menu',
        bindToController: true,
        templateUrl : 'foundItems.html',
        scope : {
            found: '<',
            onRemove: '&'
        }
    }
    return ddo;
}

})();