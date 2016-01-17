'use strict';

var controller = require('./files.controller');
var router = require('koa-router')();

router.get('/', controller.index);
router.post('/upload', controller.upload);
module.exports = router.routes();
