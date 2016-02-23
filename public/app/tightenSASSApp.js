/*globals angular, Prism */

(function () {
    'use strict';
    var run = function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        },

        viewController = function () {
            console.log('hi');
            Prism.highlightAll();
        },

        configRoutes = function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/');

            $stateProvider
                .state("home", {
                    url         : '/',
                    templateUrl : '/app/index/index.html',
                    controller  : viewController
                })

                .state("intro-to-sass", {
                    url         : '/intro-to-sass',
                    templateUrl : '/app/intro-to-sass/intro-to-sass.html',
                    controller  : viewController
                })

                .state("survey", {
                    url         : '/survey',
                    templateUrl : '/app/survey/survey.html',
                    controller  : viewController
                });
        };

    angular.module('tightenSASS', [
        'tightenSASS.basics',
        'tightenSASS.bestPractices',
        'ui.router',
        'ngAnimate'
    ])
           .run(['$rootScope', '$state', '$stateParams', run])
           .config(['$stateProvider', '$urlRouterProvider', configRoutes]);
}());