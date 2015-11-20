//var Alphabet = require('./alphabet');
var Cache = require('./cache');
var Numbers = require('./numbers');
var Filter = require('./filter');
//var alpha = new Alphabet();
//var cache = new Cache({ key: 'alpha1' });
var num = new Numbers();
var numCache = new Cache({ key: 'number1'});
var filter = new Filter({key: 'number1'});

//alpha.pipe(cache);
num.pipe(numCache);

/*cache.on('finish', function() {
    console.log('cache store:', Cache.store);
});*/

numCache.on('finish', function() {
    console.log('cache store:', Cache.store);
});
