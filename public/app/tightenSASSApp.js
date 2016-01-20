/*globals angular */

(function () {
    'use strict';
    var run = function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        },

        configRoutes = function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/');

            $stateProvider
                .state("home", {
                    url         : '/',
                    templateUrl : '/app/index/index.html'
                })

                .state("intro-to-sass", {
                    url         : '/intro-to-sass',
                    templateUrl : '/app/intro-to-sass/intro-to-sass.html'
                })

                .state("survey", {
                    url         : '/survey',
                    templateUrl : '/app/survey/survey.html'
                });
        };

    angular.module('tightenSASS', [
        'tightenSASS.basics',
        'ui.router',
        'ngAnimate'
    ])
           .run(['$rootScope', '$state', '$stateParams', run])
           .config(['$stateProvider', '$urlRouterProvider', configRoutes]);
}());