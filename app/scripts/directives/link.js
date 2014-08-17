'use strict';
/**
*  Display linked page in an iframe
*
* Description
*/
angular.module('ngTwitterApp.directives', []).
directive('link', function(){
	return{
		restrict: 'AE',
		link: function (scope, element, attribute){
			console.log(element);
			element.on('click', function(e){
				e.preventDefault();
				scope.toggleDisplay(scope.tweet);
				scope.$digest();
			});
		}
	}
})
.directive('linkpage', function($sce){
	return{
		restrict: 'AE',
		link: function (scope, element, attribute){
			scope.url = attribute.url;
			//set iframe source as a trusted url
			scope.trustedSrc = function(src) {
					return $sce.trustAsResourceUrl(src);
				}
			scope.toggleFrame = function(){
					scope.tweet.display = false;
				}
		},
		template: '<div class="my-modal"><a ng-click="toggleFrame()">close</a><iframe ng-src="{{trustedSrc(url)}}"></iframe></div>'
	}
});
;
