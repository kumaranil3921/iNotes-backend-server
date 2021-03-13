const Notes = require('../../models/noteModel');
const responses = require('../../commonFunctions/responses');
const constants = require('../../constants/constants');
const database = require('../../services/databaseService');

module.exports = {
  getNotes: getNotes,
  getNote: getNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote
}

async function getNotes(req, res) {
  try {
    const notes = await database.getOne(Notes);
    responses.sendResponse(res, notes);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}
async function getNote(req, res) {
  try {
    const body = req.params;
    const notes = await database.getOne(Notes, { _id: body.id });
    responses.sendResponse(res, notes);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}
async function createNote(req, res) {
  try {
    const note = database.createData(Notes, req.body)
    responses.sendResponse(res);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}
async function updateNote(req, res) {
  try {
    await database.updateOne(Notes, { _id: req.params.id }, req.body);
    responses.sendResponse(res);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}
async function deleteNote(req, res) {
  try {
    const note = await database.deleteOne(Notes, { _id: req.params.id });
    if (!note) {
      return responses.sendResponse(res, {}, constants.RESPONSE_MESSAGES.NOT_FOUND, constants.STATUS_CODES.NOT_FOUND)
    }
    responses.sendResponse(res);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}