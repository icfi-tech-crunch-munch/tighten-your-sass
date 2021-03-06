/*globals angular */

(function () {
    'use strict';

    var viewController = function () {
            Prism.highlightAll();
        },

        configCommandRoutes = function ($stateProvider) {
            $stateProvider
                .state("basics", {
                    abstract    : true,
                    url         : '/basics',
                    templateUrl : '/app/basics/basics.html',
                    controller  : viewController
                })

                .state("basics.basic", {
                    url         : '/:basicName',
                    templateUrl : function ($stateParams) {
                        return '/app/basics/' + $stateParams.basicName + '.html';
                    },
                    controller  : viewController
                });
        };

    angular.module('tightenSASS.basics', ['ui.router'])
           .config(['$stateProvider', configCommandRoutes]);
}());