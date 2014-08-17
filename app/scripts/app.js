'use strict';

angular.module('ngTwitterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTwitterApp.services',
    'ngTwitterApp.filters',
    'ngTwitterApp.directives',
    'infinite-scroll'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main',
                controller: 'search'
            })
            .when('/login', {
              templateUrl: 'partials/login',
              controller: 'login'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });

angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 1000)
