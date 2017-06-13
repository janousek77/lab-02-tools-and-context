'use strict';

const method = module.exports = {};

method.map = (list, callback) => Array.isArray(list) ? Array.prototype.map.call(list, callback) : null;

method.reduce = (list, args) => Array.isArray(list) ? Array.prototype.reduce.apply(list, args) : null;

method.filter = (list, arg) => Array.isArray(list) ? Array.prototype.filter.call(list, arg) : null;

// method.concat = (list, callback) => Array.isArray(list) ? Array.prototype.concat.call(list, callback) : null;
