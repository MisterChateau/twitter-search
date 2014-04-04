'use strict';

angular.module('ngTwitterApp.services', []).
factory('search', function($http) {
        console.log('hello');
        var query = function(keyword) {
            return $http({
                method: 'GET',
                url: '/twittersearch/' + keyword
            });
        }
            return {
                query: function(keyword) {
                    var result = query(keyword);
                    console.log(result);
                    return result;
                }
            }
        });