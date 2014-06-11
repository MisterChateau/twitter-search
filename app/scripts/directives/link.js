'use strict';
/**
*  Display linked page in an iframe
*
* Description
*/
angular.module('ngTwitterApp.directives', []).
directive('link', function($sce){
	return{
		restrict: 'AE',
		scope: {
			url: '@url'
			},
		link: function (scope, element, attribute){
			scope.url = attribute.url;
			//set iframe source as a trusted url
			scope.trustedSrc = function(src) {
    			return $sce.trustAsResourceUrl(src);
    		}

    		scope.toggleFrame = function(){
    			console.log("hello");
    			console.log(scope);
    		}
		},
		template: "<div class="+"my-modal"+"><button ng-click="+"toggleFrame()"+">Close</button><iframe ng-src='{{trustedSrc(url)}}'></iframe></div>"
	}
});