// Import Configuration
var config = require('./config');

// Import Modules
var NewsAPI = require('newsapi');
var Q = require('q');

// Instantiation
var newsapi = new NewsAPI(config.newsapi.key);

// Create Q Spawn Environment
var deferred = Q.defer();
Q.spawn(function*(){

    function getSourceList() {
        newsapi.sources({ language: 'en' }).then(res => {
            var result = [];
            for(var i=0;i<res.sources.length;i++){
                result.push(res.sources[i].id);
            }
            return result;
        }).then(res => {
            deferred.resolve(res);
        });

        return deferred.promise;
    }

    async function raid() {
        var source_list = await getSourceList();
        console.log(source_list);
    }

    raid();

    

});