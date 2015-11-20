var stream = require('stream');

function Filter(options) {
    stream.Transform.call(this, options);
    this._key = options.key;
    this._value = null;
}

Filter.prototype._transform = function (chunk, encoding, done) {
    console.log('hit');
    if (!this._value) {
        this._value = chunk;
    }
    else {
        this._value = Buffer.concat([this._value, chunk]);
    }
    done();
};

var transform = new stream.Transform({
  transform: function(chunk, encoding, next) {
    // sets this._transform under the hood

    // generate output as many times as needed
    // this.push(chunk);

    // call when the current chunk is consumed
    next();
  },
  flush: function(done) {
    // sets this._flush under the hood

    // generate output as many times as needed
    // this.push(chunk);

    done();
  }
});

module.exports = Filter;