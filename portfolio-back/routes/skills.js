const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const skillCtrl = require('../controllers/skills');

router.get('/', multer, skillCtrl.getAllSkills);
router.get('/:id', auth, multer, skillCtrl.getOneSkill);
router.post('/', auth, multer, skillCtrl.createSkill);
router.put('/:id', auth, multer, skillCtrl.modifySkill);
router.delete('/:id', auth, skillCtrl.deleteSkill);

module.exports = router;


