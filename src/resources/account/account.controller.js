'use strict';

var koajwt = require('koa-jwt');


// curl http://localhost:8080/account
exports.index = function*(next) {
    this.status = 200;
    this.body = [];
    //return yield next; //增加此行还会继续向下执行。未增加则认为是到此中结把结果返回给接口
};


// curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:8080/account/login
exports.login = function*(next) {
    if ('POST' !== this.method) {
        return yield next;
    }
    console.log(this.request.body);
    this.status = 200;
    this.body = koajwt.sign(this.request.body, 'secret', {
        expiresInMinutes: 60 * 5 //设置超时时间为5小时
    });
};
