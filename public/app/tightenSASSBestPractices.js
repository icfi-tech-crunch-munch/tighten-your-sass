/*globals angular */

(function () {
    'use strict';

    var viewController = function () {
            Prism.highlightAll();
        },

        configCommandRoutes = function ($stateProvider) {
            $stateProvider
                .state("bestPractices", {
                    abstract    : true,
                    url         : '/best-practices',
                    templateUrl : '/app/best-practices/best-practices.html',
                    controller  : viewController
                })

                .state("bestPractices.bestPractice", {
                    url         : '/:bestPracticeName',
                    templateUrl : function ($stateParams) {
                        return '/app/best-practices/' + $stateParams.bestPracticeName + '.html';
                    },
                    controller  : viewController
                });
        };

    angular.module('tightenSASS.bestPractices', ['ui.router'])
           .config(['$stateProvider', configCommandRoutes]);
}());