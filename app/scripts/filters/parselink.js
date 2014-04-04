'use strict';

angular.module('ngTwitterApp.filters', []).
filter('parseLink', function() {
    return function(text) {
        var regexp = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
        var match = text.match(regexp);
        if (match != null) {
            text = text.replace(regexp, "<a href=" + match[0] + ">" + match[0] + "</a>");
            return text;
        } else {
            return text;
        }
    }
});