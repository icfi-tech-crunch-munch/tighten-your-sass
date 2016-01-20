/*globals angular */

(function () {
    'use strict';

    var configCommandRoutes = function ($stateProvider) {
            $stateProvider
                .state("basics", {
                    abstract    : true,
                    url         : '/basics',
                    templateUrl : '/app/basics/basics.html'
                })

                .state("basics.basic", {
                    url         : '/:basicName',
                    templateUrl : function ($stateParams) {
                        return '/app/basics/' + $stateParams.basicName + '.html';
                    }
                });
        };

    angular.module('tightenSASS.basics', ['ui.router'])
           .config(['$stateProvider', configCommandRoutes]);
}());