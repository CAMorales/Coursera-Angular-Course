(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var mainList = this;
  mainList.items = items;
  console.log(mainList);
}

})();
