(function() {
    'use strict';
    var myApp = angular.module('ShoppingListCheckOff', []);
    myApp.controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
      var ctrl1 = this;
      ctrl1.items = ShoppingListCheckOffService.getToBuyList();

      ctrl1.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
      }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var ctrl2 = this;
      ctrl2.items = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService() {
      var service = this;
      var toBuy = [
        { name: "cookies", quantity: 10 },
        { name: "chocolates", quantity: 20 },
        { name: "lays", quantity: 35 },
        { name: "kit-kats", quantity: 36 },
        { name: "chips", quantity: 20 }
      ];
      var bought = [];

      service.buyItem = function (index) {
        bought.push(toBuy.splice(index,1)[0]);
      }

      service.getToBuyList = function () {
        return toBuy;
      }

      service.getBoughtList = function () {
        return bought;
      }
    }
})();
