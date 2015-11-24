var Alphabet = require('./alphabet');
var Cache = require('./cache');
var Numbers = require('./numbers');
var filter = require('./filter');
var capitalize = require('./capitalize');


var alpha = new Alphabet();
var cache = new Cache({ key: 'alpha1' });
var cache2 = new Cache({ key: 'alpha2'});
var num = new Numbers();
var numCache = new Cache({ key: 'number1'});
var numCache2 = new Cache({ key: 'number2'});

//syntax 
//input.pipe(output) <<<<<<  is this right for Write?
num.pipe(numCache);
num.pipe(filter).pipe(numCache2);

//input.pipe(transform).pipe(output) <<<<<  is this right for Transform?
alpha.pipe(cache);  //<<<<<<  should be lowercase
alpha.pipe(capitalize).pipe(cache2); //<<<<<  should be uppercase


cache2.on('finish', function() {
    console.log('cache store:', Cache.store);
});
