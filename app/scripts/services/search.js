'use strict';

angular.module('ngTwitterApp.services', []).
factory('search', function($http) {
    var query = function(keyword, max_id) {

        if(max_id === undefined){
            return $http({
                method: 'GET',
                url: '/api/twittersearch/' + keyword
            });
        }
        else{
            return $http({
                method: 'GET',
                url: '/api/twittersearch/' + keyword + '/' + max_id
            });
        }
    }
    return {
        query: function(keyword, max_id) {
            var result = query(keyword, max_id);
            return result;
        }
    }
})

.factory('loginTwitter', function($http) {
  var login = function() {
    return $http({method: 'GET', url:'/api/twitterlogin'});
  }
  return {
    query: function() {
      console.log(login);
      var result = login();
      return result;
    }
  }
});
