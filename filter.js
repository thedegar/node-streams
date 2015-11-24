var filter = require('stream').Transform();


filter._transform = function (chunk, encoding, done) {
    var data = chunk;
    this.push(data);
    done();
};

module.exports = filter;