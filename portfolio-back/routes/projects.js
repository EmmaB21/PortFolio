
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const projectCtrl = require('../controllers/projects');

router.get('/', auth, projectCtrl.getAllProjects);
router.post('/', auth, multer, projectCtrl.createProject);
router.put('/:id', auth, multer, projectCtrl.modifyProject);
router.delete('/:id', auth, projectCtrl.deleteProject);

module.exports = router;


