(function() {
    'use strict';
    var myApp = angular.module('LunchCheck', []);
    myApp.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    //"Enjoy!" or "Too much!" "Please enter data first"

    function LunchCheckController($scope){

      $scope.lunch = "";

      $scope.checkLunch = function(){
        $scope.foods = $scope.lunch.split(",").filter(nonEmpty);
        if ($scope.foods.length < 1) {
          $scope.message = "Please enter data first";
          $scope.alertClass = "red";
        }else if($scope.foods.length<4){
          $scope.message = "Enjoy!";
          $scope.alertClass = "green";
        }else{
          $scope.message = "Too much!";
          $scope.alertClass = "green";
        }
      };

      function nonEmpty(item){
        item = item.trim();
        return item.length>0;
      }
    }
})();
