'use strict';

angular.module('ngTwitterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTwitterApp.services',
    'ngTwitterApp.filters',
    'infinite-scroll'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main',
                controller: 'search'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });

angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 1000)
