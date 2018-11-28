(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListController', ShoppingListController)
.controller('AlreadyBoughtShoppingListController', AlreadyBoughtShoppingListController)
.service('ShoppingListService', ShoppingListService);


ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService){
    var list = this;
    list.empty = false;
    list.items = ShoppingListService.getItems();
    list.buy = function(index){
        var removedItem = ShoppingListService.getItem(index);
        console.log('removedItem: ' + removedItem);
        ShoppingListService.addToBoughtList(removedItem);
        ShoppingListService.removeItem(index);
        list.empty = list.items.length === 0;
    };
}

function ShoppingListService (){
    var service = this;
    var shoppingItems = [
        {name: 'cookies', quantity : 10},
        {name: 'kimchies', quantity : 3},
        {name: 'cakes', quantity : 1},
        {name: 'apples', quantity : 2},
        {name: 'bananas', quantity : 5},
    ];
    var alreadyBoughtList = [];

    service.getItem = function(index){
        return shoppingItems[index];
    }
    service.getItems = function(){
        return shoppingItems;
    };
    service.getBoughtItems = function(){
        return alreadyBoughtList;
    };

    service.removeItem = function(index){
        return shoppingItems.splice(index, 1);
    };

    service.addToBoughtList = function(shoppingItem){
        alreadyBoughtList.push(shoppingItem);
    };
}

AlreadyBoughtShoppingListController.$inject = ['ShoppingListService'];
function AlreadyBoughtShoppingListController(ShoppingListService){
    var boughtList = this;
    boughtList.items = ShoppingListService.getBoughtItems();
}

})();