'use strict';

angular.module('ngTwitterApp')
    .controller('search', function($scope, search) {

        $scope.$watch('query', function(newQuery) {
            search.query(newQuery).success(function(data) {
                $scope.tweets = data.statuses;
                $scope.metadata = data.search_metadata;
            });
        });

        $scope.toggleDisplay = function(tweet){
            if(tweet.display != true){
                tweet.display = true;
            }
            else{
                tweet.display = false;
            }
            console.log(tweet.display);
        }

        $scope.infiniteScroll = function() {
            if ($scope.metadata) {
                var nextResults = $scope.metadata.next_results;
                if (nextResults) {
                    var maxId = nextResults.match('max_id=\\d*');
                    maxId = maxId[0].match('\\d*$');
                    search.query($scope.query, maxId[0])
                    .then(function(response) {
                    	var currentTweets = $scope.tweets;
                        for(var i = 0; i < response.data.statuses.length; i++){
                                response.data.statuses[i].text = response.data.statuses[i].text;
                        }
                        $scope.tweets = currentTweets.concat(response.data.statuses);
                    	$scope.metadata = response.data.search_metadata;
                    });
                }
            }
        }
})
.controller('login', function($scope, loginTwitter){
    $scope.login = function(){
      // login.query()
      // .success(function(data){
      //     console.log(data);
      //   });
        console.log(loginTwitter.query()
        .success(function(data){console.log(data)})
        .error(function(data){console.log(data)}));
      }
});
