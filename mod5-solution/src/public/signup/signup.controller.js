/**
 * Created by azazel on 31/01/17.
 */
(function () {
    'use strict';
    angular.module('public')
    .controller('SignupController',SignupController);

    SignupController.$inject = ['MenuService','SignupService'];

    function SignupController(MenuService, SignupService) {
        var vm = this;
        vm.signup = function () {
            vm.wrongDish = false;
            MenuService.getDish(vm.user.favDish).then(function (data) {
                vm.user.dish = data;
                vm.user.saved = true;
                SignupService.setUser(vm.user);
            },function () {
                vm.wrongDish = true;
            });

        }
    }
})();
