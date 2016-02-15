'use strict';

var koajwt = require('koa-jwt');

// curl http://localhost:8080/account
exports.index = function*(next) {
    this.status = 200;
    this.body = [];
};


// curl -H "Content-Type: application/json" -X POST -d '{"userLogin":{"userName":"a@a.com","password":"111111"}}' http://localhost:8080/account/login
exports.login = function*(next) {
    if ('POST' !== this.method) return yield next;
    console.log(this.request.body);
    this.status = 200;
    var res = {};
    if (this.request.body && this.request.body.userLogin && this.request.body.userLogin.userName === 'a@a.com' && this.request.body.userLogin.password === '111111') {
        res = {
            status: true,
            token: koajwt.sign(this.request.body, 'secret', {
                expiresInMinutes: 60 * 5 //设置超时时间为5小时
            })
        };
        this.body = res;
    } else {
        res = {
            status: false
        };
        this.body = res;
    }
};

// curl -H "Content-Type: application/json" -X POST -d '{"userLogin":{"userName":"a@a.com","password":"111111"}}' http://localhost:8080/account/checkAuth
exports.checkAuth = function*(next) {
    if ('POST' !== this.method) return yield next;
    this.status = 200;
    this.body = {
        status: true
    };
};

// curl -H "Content-Type: application/json" -X POST -d '{"userLogin":{"userName":"a@a.com","password":"111111"}}' http://localhost:8080/account/checkAuth
exports.logout = function*(next) {
    if ('POST' !== this.method) return yield next;
    this.status = 200;
    this.body = {
        status: true
    };
};
