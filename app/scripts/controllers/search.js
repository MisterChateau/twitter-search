'use strict';

angular.module('ngTwitterApp')
    .controller('search', function($scope, $filter, search) {
        $scope.$watch('query', function(newQuery) {
            search.query(newQuery).success(function(data) {
                $scope.tweets = data.statuses;
                $scope.metadata = data.search_metadata;
            });
        });

        $scope.toggleDisplay = function(){
            if(this.display === false || undefined){
                this.display = true;
            }
            else{
                this.display = false;
            }
        }

        $scope.infiniteScroll = function() {
            if ($scope.metadata != undefined) {
                var nextResults = $scope.metadata.next_results;
                if (nextResults != undefined) {
                    var maxId = nextResults.match('max_id=\\d*');
                    maxId = maxId[0].match('\\d*$');
                    search.query($scope.query, maxId[0])
                    .then(function(response) {
                    	var currentTweets = $scope.tweets;
                        for(var i = 0; i < response.data.statuses.length; i++){
                                response.data.statuses[i].text = $filter('parseLink')(response.data.statuses[i].text);
                        }
                        $scope.tweets = currentTweets.concat(response.data.statuses);    
                    	$scope.metadata = response.data.search_metadata;
                    });
                }
            }
        }
    });