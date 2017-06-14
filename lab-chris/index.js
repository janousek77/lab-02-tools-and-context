'use strict';

const fp = require('./lib/fp.js');

const main =  module.exports = () => {
  let result = fp.map(process.argv, (x) => x.toUpperCase()
);
  console.log(result);
  return result;
};

main();
