var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var livereloadMiddleware = function (connect, options) {
  return [
    lrSnippet,
    connect.static(options.base),
    connect.directory(options.base)
  ];
};

module.exports = {
  client: {
    options: {
      // The server's port, and the folder to serve from:
      // Ex: 'localhost:9000' would serve up 'src/index.html'
      port: 9000,
      base:'dist',
      // Custom middleware for the HTTP server:
      // The injected JavaScript reloads the page.
      middleware: livereloadMiddleware
    }
  }
}