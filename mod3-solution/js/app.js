(function() {
    'use strict';
    var myApp = angular.module('NarrowItDownApp', []);
    myApp.controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var vm = this;

        vm.narrow = function() {
            vm.found = undefined;
            vm.error = false;
            if (vm.searchTerm) {
                var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);
                promise.then(function(data) {
                    vm.found = data;
                    vm.error = vm.found.length<=0;
                });
            }else{
                vm.error=true;
            }
        };

        vm.removeItem = function(itemIndex) {
            vm.found.splice(itemIndex, 1);
        };
    }

    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            restrict:'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: foundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function foundItemsDirectiveController(){
      var list = this;
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(result) {
                var foundItems = result.data.menu_items.filter(filterTerms(searchTerm));
                return foundItems;
            });
        };
    }

    function filterTerms(searchTerm){
        return function(item){
            return item.description.indexOf(searchTerm)>=0;
        }
    }
})();
