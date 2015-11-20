var stream = require('stream');

function Numbers(option) {
    stream.Readable.call(this, option);
    this._start = 0;
    this._end = 100;
}
Numbers.prototype = Object.create(stream.Readable.prototype);
Numbers.prototype.constructor = stream.Readable;

Numbers.prototype._read = function() {
    this._curr = Math.floor((Math.random() * 100) + 1);
    var number = String.fromCharCode(this._curr);
    var buf = new Buffer(number, 'utf8');
    this.push(buf);
    this._start++;
    if (this._start === this._end) {
        this.push(null);
    }
};

module.exports = Numbers;