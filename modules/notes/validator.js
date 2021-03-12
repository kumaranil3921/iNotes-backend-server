const Joi = require('joi');
const { model } = require('mongoose');

const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

const validator = require('../../services/validationService');

module.exports = {
  getNotes: getNotes,
  getNote: getNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote
}

function getNotes(req, res, next) {
  const schema = Joi.object().keys({
  });
  const validFields = validator.validateFields(req.query, res, schema);
  if (validFields) {
    next();
  }
}
function getNote(req, res, next) {
  const schema = Joi.object().keys({
    id: Joi.string().regex(checkForHexRegExp).required()
  });
  const validFields = validator.validateFields(req.params, res, schema);
  if (validFields) {
    next();
  }
}

function createNote(req, res, next) {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required()
  });
  const validFields = validator.validateFields(req.body, res, schema);
  if (validFields) {
    next();
  }
}

function updateNote(req, res, next) {
  const schema = Joi.object().keys({
    id: Joi.string().regex(checkForHexRegExp).required(),
    title: Joi.string().required(),
    description: Joi.string().required()
  });
  const dataToValidate = Object.assign(req.params, req.body);
  const validFields = validator.validateFields(dataToValidate, res, schema);
  if (validFields) {
    next();
  }
}

function deleteNote(req, res, next) {
  const schema = Joi.object().keys({
    id: Joi.string().regex(checkForHexRegExp).required()
  });
  const validFields = validator.validateFields(req.params, res, schema);
  if (validFields) {
    next();
  }
}