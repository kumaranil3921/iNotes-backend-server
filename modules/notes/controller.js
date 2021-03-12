const Notes = require('../../models/noteModel');
const responses = require('../../commonFunctions/responses');
const constants = require('../../constants/constants');

module.exports = {
  getNotes: getNotes,
  getNote: getNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote
}

async function getNotes(req, res) {
  try {
    const notes = await Notes.find({});
    responses.sendResponse(res, notes);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}
async function getNote(req, res) {
  try {
    const body = req.params;
    const notes = await Notes.find({ _id: body.id });
    responses.sendResponse(res, notes);
  } catch (error) {
    responses.sendServerErrorResponse();
  }
}
async function createNote(req, res) {
  try {
    const note = new Notes(req.body);
    await note.save();
    responses.sendResponse(res);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}
async function updateNote(req, res) {
  try {
    await Notes.findOneAndUpdate({ _id: req.params.id }, req.body);
    responses.sendResponse(res);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}
async function deleteNote(req, res) {
  try {
    const note = await Notes.findOneAndRemove({ _id: req.params.id });
    if (!note) {
      return responses.sendResponse(res, {}, constants.RESPONSE_MESSAGES.NOT_FOUND, constants.STATUS_CODES.NOT_FOUND)
    }
    responses.sendResponse(res);
  } catch (error) {
    responses.sendServerErrorResponse(res);
  }
}