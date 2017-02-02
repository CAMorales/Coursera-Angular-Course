/**
 * Created by azazel on 1/02/17.
 */

(function () {
    'use strict';
    angular.module('common').factory('SignupService',SignupService);

    SignupService.$inject = [];

    function SignupService() {
        var userSigned = {};

        return{
            getUser: getUser,
            setUser: setUser
        };

        function getUser() {
            return userSigned;
        }

        function setUser(user) {
            userSigned = user;
        }
    }
})();