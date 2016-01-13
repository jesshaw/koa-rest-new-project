'use strict';

var controller = require('./account.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.post('/login', controller.login);
module.exports = router.routes();
