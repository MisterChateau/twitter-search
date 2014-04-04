'use strict';

angular.module('ngTwitterApp')
  .controller('search', function ($scope, search) {
    $scope.$watch('query', function(newQuery) {
        search.query(newQuery).success(function(data) {
            $scope.tweets = data.statuses;
        });
    });
  });

