// Import Configuration
var config = require('./config');

// Import Modules
var NewsAPI = require('newsapi');
var Q = require('q');

// Instantiation
var newsapi = new NewsAPI(config.newsapi.key);
var MAX_SOURCES_RAIDED = 3;

// Create Q Spawn Environment
Q.spawn(function*(){

    function getSourceList() {
        var deferred = Q.defer();
    
        newsapi.sources({ language: 'en' }).then(res => {
            var result = [];
            for(var i=0;i<res.sources.length;i++){
                result.push(res.sources[i].id);
            }
            console.log(result.length);
            return result;
        }).then(res => {
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    function getArticlesBySource(source_name){
        var deferred = Q.defer();
        
        newsapi.articles({ source: source_name }).then(res => {
            console.log(source_name);
            deferred.resolve(res);
        });
        return deferred.promise;        
    }

    
    async function raid() {
        var source_list = await getSourceList();
        console.log(source_list);
    
        for(var i=0;i<MAX_SOURCES_RAIDED;i++){
            var articles = await getArticlesBySource(source_list[i]);
            console.log(articles);
        }
    }
    
    raid();
        

});

