'use strict';

const method = module.exports = {};

method.map = (list, callback) => Array.isArray(list) ? Array.prototype.map.call(list, callback) : null;

method.reduce = (list, args) => Array.isArray(list) ? Array.prototype.reduce.apply(list, args) : null;

method.filter = (list, arg) => Array.isArray(list) ? Array.prototype.filter.call(list, arg) : null;

method.concat = (list, callback) => Array.isArray(list) ? Array.prototype.concat.apply(list, callback) : null;

method.splice = (list, callback) => Array.isArray(list) ? Array.prototype.splice.call(list, callback) : null;
