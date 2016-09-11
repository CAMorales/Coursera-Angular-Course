(function() {
    'use strict';
    var myApp = angular.module('NameCalcultaor', []);
    myApp.controller('NameCalcultaorController', ['$scope', function($scope) {
      $scope.name = "";
      $scope.totalValue = 0;
      $scope.displayNumeric = function(){
        var totalValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalValue;
      }
      function calculateNumericForString(string){
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
           totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      }
    }])
})();
