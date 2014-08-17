'use strict';

var twitter = require('twitter'),
    request = require('superagent'),
    readability = require('node-readability'),
    config = {
      consumer_key: 'rwnwWail6R07QVzCRlQSM9fbu',
      consumer_secret: 's9B7ZrctQnfQ6qCPljZpgIPbx2F56zzpDHemdD5k8FJqv2RyEq',
      access_token_key: '15214200-AKAs6DqRT36LLohwg1RDk3UGINEqlwSlJnfSYcePj',
      access_token_secret: 'BjMT9WkIv0TOTIU4r9Z5iZIxDhcqoMO7iWsVr9hwmiWqJ'
    };
/**
 * Call twitter API
 */
exports.twitterSearch = function(req, res) {
    //twitter conf
    var twit = new twitter(config);
    //Call search API
    if (req.params.max_id === undefined) {
        twit.search(req.params.keywords, {
            result_type: 'popular'
        }, function(data) {
            console.log(JSON.stringify(data));
            return res.send(data);
        });
    } else {
        twit.search(req.params.keyword, {
           //result_type: 'popular',
            max_id: req.params.max_id
        }, function(data) {
            console.log(JSON.stringify(data));
            return res.send(data);
        });
    }

};

exports.twitterFeeds = function(req, res) {

  var twit =  new twitter(config);
};

exports.twitterLogin = function(req, res) {

  var twit = new twitter(config);
  console.log('hello', twit);
  return res.json(twit);
};
