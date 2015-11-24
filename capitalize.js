#!/usr/bin/env node

var capitalize = require('stream').Transform();

capitalize._transform = function(chunk, encoding, callback) {
    var data = chunk.toString().toUpperCase();
    this.push(data);
    callback();
    
    //my code
    //console.log(chunk.toString()); <<running into issues getting the buffer item back into a number
    //this.push(chunk);
    //callback();
};

//process.stdin.pipe(capitalize).pipe(process.stdout);

var thisThing = function() {
    this._curr = 'Tyler is doing this';
    console.log(this._curr);
};

//thisThing();

//thisThing.pipe(capitalize).pipe(process.stdout);

module.exports = capitalize;