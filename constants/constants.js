const STATUS_CODES = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  PARAMETER_MISSING: 400,
  NOT_FOUND: 404,
  FORBIDDEN: 403
}

const RESPONSE_MESSAGES = {
  SUCCESS: 'Success',
  BAD_REQUEST: 'Unable to process your request',
  SERVER_ERROR: 'Something went wrong, please try later',
  NOT_FOUND: 'Unable to find requested item',
  FORBIDDEN: 'Unauthorized',
}

module.exports = {
  STATUS_CODES: Object.freeze(STATUS_CODES),
  RESPONSE_MESSAGES: Object.freeze(RESPONSE_MESSAGES)
}