const Joi = require('joi');
const responses = require('../commonFunctions/responses');
const constants = require('../constants/constants');
module.exports = {
  validateFields: validateFields
}

function validateFields (req, res, schema) {
  var validation = schema.validate(req);
  if (validation.error) {
    var errorReason =
      validation.error.details !== undefined
        ? validation.error.details[0].message
        : 'Parameter missing or parameter type is wrong';
    responses.sendResponse(res, {}, errorReason, constants.STATUS_CODES.PARAMETER_MISSING);
    return false;
  }
  return true;
};

