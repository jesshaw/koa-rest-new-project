'use strict';

var controller = require('./account.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.post('/login', controller.login);

router.post('/checkAuth', controller.checkAuth);
router.post('/logout', controller.logout);
module.exports = router.routes();
