'use strict';

// var koajwt = require('koa-jwt');

// var profile = {
//     id: 123
// };


// var token = koajwt.sign(profile, 'secret', {
//     expiresInMinutes: 60 * 5 //设置超时时间为5小时
// });

// var generatorToken = function(profile) {
//     koajwt.sign(profile, 'secret', {
//         expiresInMinutes: 60 * 5 //设置超时时间为5小时
//     });
// }


exports.index = function*(next) {
    console.log(this.method);
    this.status = 200;
    this.body = [];
    // return yield next;

};


//$ curl -d '{"userName":"aaa","password":"111111"}' http://localhost:8080/account/login
exports.login = function*(next) {
    // console.log(this.method);
    if ('POST' !== this.method) return yield next;
    this.status = 200;
    this.body = "token";
};
