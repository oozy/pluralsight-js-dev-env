//this is isn't transpiled , so must to use CommonJS and ES5

//Register babel to transpile befor our tests run.
require('babel-register')();

//Disable webpack features taht Mocha doesn't understand.
require.extensions['.css'] = function(){};

