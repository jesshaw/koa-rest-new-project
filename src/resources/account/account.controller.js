'use strict';

var koajwt = require('koa-jwt');

exports.index = function*(next) {
    console.log(this.method);
    this.status = 200;
    this.body = [];
    // return yield next;
};


// curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:8080/account/login
exports.login = function*(next) {
    if ('POST' !== this.method) return yield next;
    // console.log(this.request.body);
    this.status = 200;
    this.body = koajwt.sign(this.request.body, 'secret', {
        expiresInMinutes: 60 * 5 //设置超时时间为5小时
    });
};
