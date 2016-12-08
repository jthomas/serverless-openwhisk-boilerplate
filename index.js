'use strict';

// should add NPM module?

function main(params) {
  const name = params.name || 'World';
  return {payload:  'Hello, ' + name + '!'};
}

exports.main = main
