// the file isn't transpiled, so you should use common.js

// register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features than Mocha doesn't understand
require.extensions['.css'] = function () {};
