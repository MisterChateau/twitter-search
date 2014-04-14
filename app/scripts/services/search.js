'use strict';

angular.module('ngTwitterApp.services', []).
factory('search', function($http) {
    var query = function(keyword, max_id) {
        console.log(max_id);

        if(max_id === undefined){
            return $http({
                method: 'GET',
                url: '/twittersearch/' + keyword
            });
        }
        else{
            return $http({
                method: 'GET',
                url: '/twittersearch/' + keyword + '/' + max_id
            });
        }
    }
    return {
        query: function(keyword, max_id) {
            var result = query(keyword, max_id);
            return result;
        }
    }
});