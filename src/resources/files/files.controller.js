'use strict';


var parse = require('co-busboy');
var fs = require('fs');
var os = require('os');
var path = require('path');

// curl http://localhost:8080/files
exports.index = function*(next) {
    this.status = 200;
    this.body = [];
};

// handle uploads
exports.upload = function*(next) {
    //console.log(this);
    // ignore non-POSTs
    if ('POST' !== this.method) return yield next;

    // multipart upload
    var parts = parse(this);
    var part;

    while (!!(part = yield parts)) {
        var stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
        part.pipe(stream);
        console.log('uploading %s -> %s', part.filename, stream.path);
    }

    this.status = 200;
    this.body = {
        status: true,
        message: "upload success!"
    };
};
