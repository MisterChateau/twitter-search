'use strict';

angular.module('ngTwitterApp')
    .controller('search', function($scope, search) {
        $scope.$watch('query', function(newQuery) {
            search.query(newQuery).success(function(data) {
                $scope.tweets = data.statuses;
                $scope.metadata = data.search_metadata;
            });
        });

        $scope.infiniteScroll = function() {
            if ($scope.metadata != undefined) {
                var nextResults = $scope.metadata.next_results;
                if (nextResults != undefined) {
                    var maxId = nextResults.match('max_id=\\d*');
                    maxId = maxId[0].match('\\d*$');
                    search.query($scope.query, maxId[0])
                    .then(function(response) {
                    	var currentTweets = $scope.tweets;
                        $scope.tweets = currentTweets.concat(response.data.statuses);    
                    	$scope.metadata = response.data.search_metadata;
                    });
                }
            }
        }
    });