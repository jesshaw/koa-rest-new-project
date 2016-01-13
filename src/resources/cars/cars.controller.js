'use strict';

// curl http://localhost:8080/cars
exports.index = function*(next) {
    this.status = 200;
    this.body = ['aa', 'bb', 'cc'];
};
