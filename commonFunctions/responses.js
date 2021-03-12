const constants = require('../constants/constants');

module.exports = {
  sendResponse: sendResponse,
  sendServerErrorResponse: sendServerErrorResponse
}

function sendResponse(res, data, msg, status) {
  var response = {
    message: msg || constants.RESPONSE_MESSAGES.SUCCESS,
    status: status || constants.STATUS_CODES.SUCCESS,
    data: data || {}
  };
  res.send(response);
}
function sendServerErrorResponse(res) {
  var response = {
    message: constants.RESPONSE_MESSAGES.SERVER_ERROR,
    status: constants.STATUS_CODES.SERVER_ERROR,
    data: {}
  };
  res.send(response);
}