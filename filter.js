var filter = require('stream').Transform();


filter._transform = function (chunk, encoding, done) {
    var data = chunk.toString();
    this.push(data);
    done();
};

module.exports = filter;