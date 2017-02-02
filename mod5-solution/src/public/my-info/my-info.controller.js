/**
 * Created by azazel on 1/02/17.
 */
(function () {
    'use strict';
    angular.module('public')
    .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject = ['SignupService'];

    function MyInfoController(SignupService) {
        var vm = this;
        vm.user = SignupService.getUser();
    }
})();