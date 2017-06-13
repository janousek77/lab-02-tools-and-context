const fp = require('./lib/fp.js');

let list = process.argv[2];
let callback = process.argv[3];

const main =  module.exports = () => {
  let result = fp.map(list, callback);
  console.log(result);
  return result;
};

main();
