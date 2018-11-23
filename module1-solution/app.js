(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.message = "";
    $scope.calculateLunch = function(){
        console.log($scope.lunchMenu);
        var arrayOfLunch = $scope.lunchMenu.split(',').filter( part => !!part );
        console.log(arrayOfLunch);
        if (!arrayOfLunch || arrayOfLunch.length === 0 ){
            $scope.message = 'Please enter data first';
            //$scope.msgStyle = {color: red};
            return;
        }
        if (arrayOfLunch.length > 3 ){
            $scope.message = 'Too much!';
            $scope.msgStyle = {color: green};
        }else{
            $scope.message = 'Enjoy!';
            $scope.msgStyle = {color: green};
        }
    }
}

})();