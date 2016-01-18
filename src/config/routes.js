/**
 * Main application routes
 */

'use strict';

var mount = require('koa-mount');
var koajwt = require('koa-jwt');
var bodyParser = require('koa-bodyparser');
var cors = require('kcors')
var serve = require('koa-static');

// var profile = {
//     id: 123
// };

// var token = koajwt.sign(profile, 'secret', {
//     expiresInMinutes: 60 * 5 //设置超时时间为5小时
// });



// console.log('  curl http://localhost:3000/            # should succeed (return "unprotected")');
// console.log('  curl http://localhost:3000/cars               # should fail (return "401 Unauthorized ...")');
// console.log('  curl -H "Authorization: Bearer ' + token + '" http://localhost:3000/cars   # should succeed (return " 200 protected")'); //

module.exports = function(app) {

    app.use(cors()); //cross origin resource sharing

    app.use(bodyParser());

    // Custom 401 handling
    app.use(function*(next) {
        try {
            //console.log(this.request.body);
            yield next;
        } catch (err) {
            console.log(err);
            if (401 === err.status) {
                this.status = 401;
                this.body = '401 Unauthorized - Protected resource, use Authorization header to get access\n';
            } else {
                throw err;
            }
        }
    });

    // Unprotected middleware

    app.use(mount('/', require('../resources/root')));

    app.use(koajwt({
            secret: 'secret'
        })
        .unless({
            path: [/^\/account\/login/]
        })
    );

    // Protected middleware

    // app.use(serve(__dirname + '/public')); //意为可以访问静态页面
    // YEOMAN INJECT ROUTES BELOW
    app.use(mount('/files', require('../resources/files')));
    app.use(mount('/account', require('../resources/account')));
    app.use(mount('/cars', require('../resources/cars')));
};
