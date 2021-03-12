const router = require('express').Router();
const validator = require('./validator');
const controller = require('./controller');


router.get('/', validator.getNotes, controller.getNotes);
router.get('/:id', validator.getNote, controller.getNote);
router.post('/', validator.createNote, controller.createNote);
router.patch('/:id',validator.updateNote, controller.updateNote);
router.delete('/:id',validator.deleteNote, controller.deleteNote);

module.exports = router;


