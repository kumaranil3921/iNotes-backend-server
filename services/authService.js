const jwt = require("jsonwebtoken");
const responses = require('../commonFunctions/responses');

module.exports = {
  authenticateToken: authenticateToken,
  generateAccessToken: generateAccessToken
}

function authenticateToken(req, res, next) {
  // check for non secure paths
  const nonSecurePaths = ['/', '/token'];
  if (nonSecurePaths.includes(req.path) || req.path.search('/docs') == 0) {
    return next();
  }

  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1];
  // if there isn't any token
  if (token == null || !token) {
    return responses.unauthorizedResponse(res);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return responses.unauthorizedResponse(res);
    }
    req.user = user;
    // pass the execution off to whatever request the client intended
    next();
  })
}

function generateAccessToken(username) {
  // expires after an hour (3600 seconds = 60 minutes)
  return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
}