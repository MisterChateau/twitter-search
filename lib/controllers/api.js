'use strict';

var twitter = require('twitter'),
    request = require('superagent');

console.log("api");
/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
    res.json([{
        name: 'HTML5 Boilerplate',
        info: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
        awesomeness: 10
    }, {
        name: 'AngularJS',
        info: 'AngularJS is a toolset for building the framework most suited to your application development.',
        awesomeness: 10
    }, {
        name: 'Karma',
        info: 'Spectacular Test Runner for JavaScript.',
        awesomeness: 10
    }, {
        name: 'Express',
        info: 'Flexible and minimalist web application framework for node.js.',
        awesomeness: 10
    }]);
};
/**
 * Call twitter API
 */
exports.twitterSearch = function(req, res) {
    console.log('hey');
    //twitter conf
    var twit = new twitter({
        consumer_key: 'rwnwWail6R07QVzCRlQSM9fbu',
        consumer_secret: 's9B7ZrctQnfQ6qCPljZpgIPbx2F56zzpDHemdD5k8FJqv2RyEq',
        access_token_key: '15214200-AKAs6DqRT36LLohwg1RDk3UGINEqlwSlJnfSYcePj',
        access_token_secret: 'BjMT9WkIv0TOTIU4r9Z5iZIxDhcqoMO7iWsVr9hwmiWqJ'
    });
    //Call search API
    twit.search(req.params['keyword'], {
        result_type: 'popular'
    }, function(data) {
      console.log(data);
        return res.send(data);
    });
};