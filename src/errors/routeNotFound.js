const { clear } = require("../db/connection");

function routeNotFound(req, res, next) {
  next({
    status: 404,
    message: `${req.originalUrl}`,
  });
}

module.exports = routeNotFound;
