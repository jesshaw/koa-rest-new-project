'use strict';


// curl http://localhost:8080
exports.index = function*(next) {
    //yield next;
    this.status = 403;
    this.body = {
        name: 'koa rest new project',
        info: '/api/doc'
    };
};
