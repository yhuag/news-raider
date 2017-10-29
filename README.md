# news-raider
Leverage NewsAPI to collect news from up to 70 sources.
The news resources are from this great API: [NewsAPI](https://newsapi.org/)

### Init
Please create a file`config.js` under root directory to set up all configurations. Such as the following example:
```
// Environment Configuration Setup
var config = {};

config.newsapi = {};

config.newsapi.key = <YOUR_API_KEY>;

module.exports = config;
```
